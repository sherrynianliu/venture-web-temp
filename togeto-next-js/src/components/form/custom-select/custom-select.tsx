'use client';

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
} from 'react';

interface CustomSelectItems {
  label: string;
  value: string;
}

interface CustomSelectProps {
  selectTitle?: string;
  selectData: CustomSelectItems[];
  value?: string;
  onChange?: (value: string) => void;
}

const CustomSelect = forwardRef<HTMLDivElement, CustomSelectProps>(
  ({ selectTitle, selectData, value, onChange }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
      selectData.find((item) => item.value === value) || selectData[0]
    );
    const dropdownRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle keyboard navigation
    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (!isOpen) return;

        const options = selectData.map((item) => item.value);
        const currentIndex = options.indexOf(selectedOption.value);
        let nextIndex = currentIndex;

        if (event.key === 'ArrowDown') {
          nextIndex = (currentIndex + 1) % options.length;
        } else if (event.key === 'ArrowUp') {
          nextIndex = (currentIndex - 1 + options.length) % options.length;
        } else if (event.key === 'Enter') {
          setIsOpen(false);
          return;
        } else if (event.key === 'Escape') {
          setIsOpen(false);
          return;
        }

        const nextOption = selectData[nextIndex];
        setSelectedOption(nextOption);
        onChange?.(nextOption.value);
      },
      [isOpen, selectData, selectedOption, onChange]
    );

    return (
      <div className="custom-select-container" ref={dropdownRef}>
        {selectTitle && <label className="label">{selectTitle}:</label>}

        <div
          className="custom-select"
          ref={ref} // Forwarding the ref here
          tabIndex={0}
          onClick={() => setIsOpen((prev) => !prev)}
          onKeyDown={handleKeyDown}
        >
          <span>{selectedOption?.label}</span>
          <span className="arrow">&#9662;</span>
        </div>

        {isOpen && (
          <ul className="dropdown" ref={listRef}>
            {selectData.map((option) => (
              <li
                key={option.value}
                className={
                  selectedOption.value === option.value ? 'selected' : ''
                }
                onClick={() => {
                  setSelectedOption(option);
                  onChange?.(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

CustomSelect.displayName = 'CustomSelect'; // Important for debugging with forwardRef

export default CustomSelect;
