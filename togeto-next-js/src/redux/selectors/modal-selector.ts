import { RootState } from '../rootReducer';

// Selector to get the entire modal state
export const selectModalState = (state: RootState) => state.modal;

// Selector to get the `isOpen` property of the modal
export const selectIsModalOpen = (state: RootState) => state.modal.isOpen;

// Selector to get the `videoId` of the modal
export const selectModalVideoId = (state: RootState) => state.modal.videoId;
