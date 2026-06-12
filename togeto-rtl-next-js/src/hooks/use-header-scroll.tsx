import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setIsVisible } from '@/redux/slices/header-slice';
import { selectIsVisible } from '@/redux/selectors/header-selector';
import { SCROLL_THRESHOLD } from '@/utils/constants';

export const useHeaderScroll = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectIsVisible);

  // Memoize the toggleVisibility function
  const toggleVisibility = useCallback(() => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      dispatch(setIsVisible(true));
    } else {
      dispatch(setIsVisible(false));
    }
  }, [dispatch]); // Recreate when SCROLL_THRESHOLD changes

  useEffect(() => {
    // Attach the event listener with the memoized function
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup the event listener on unmount or re-render
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [toggleVisibility]); // Add/remove listener only when toggleVisibility changes

  return { isVisible };
};
