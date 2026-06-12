'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import { closeModal } from '@/redux/slices/modal-slice';
import { selectModalState } from '@/redux/selectors/modal-selector';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';

const ModalVideoWrapper: React.FC = () => {
  const dispatch = useAppDispatch();

  // Use selector to get modal state (isOpen and videoId)
  const { isOpen, videoId } = useAppSelector(selectModalState);

  // If there's no video ID or document is undefined, return null
  if (!isOpen || !videoId || typeof document === 'undefined') return null;

  return ReactDOM.createPortal(
    <ModalVideo
      channel="youtube"
      isOpen={isOpen}
      videoId={videoId}
      onClose={() => dispatch(closeModal())}
    />,
    document.body
  );
};

export default ModalVideoWrapper;
