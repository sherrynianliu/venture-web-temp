import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  videoId: string | null;
}

const initialState: ModalState = {
  isOpen: false,
  videoId: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    // Reducer to open the modal and set the video ID.
    openModal(state, action: PayloadAction<string>) {
      state.isOpen = true;
      state.videoId = action.payload; // Video ID passed here
    },

    // Reducer to close the modal and reset the video ID.
    closeModal(state) {
      state.isOpen = false;
      state.videoId = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
