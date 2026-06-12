import { IMenuDT } from '@/types/menu-d-t';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Type Declaration
interface HeaderState {
  isVisible: boolean;
  isOffCanvasOpen: boolean;
  isPopUpOpen: boolean;
  isOnePage: boolean;
  onePageData: IMenuDT[];
}

// Initial State
const initialState: HeaderState = {
  isVisible: false,
  isOffCanvasOpen: false,
  isPopUpOpen: false,
  isOnePage: false,
  onePageData: [],
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    // Reducer to update the visibility state of a header or component.
    setIsVisible(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },

    // Reducer to set whether the header is in one-page mode.
    setIsOnePage(state, action: PayloadAction<boolean>) {
      state.isOnePage = action.payload;
    },

    // Reducer to toggle the state of an off-canvas menu.
    toggleOffCanvas(state, action: PayloadAction<boolean>) {
      state.isOffCanvasOpen = action.payload;
    },

    // Reducer to toggle the state of a popup modal.
    togglePopUp(state, action: PayloadAction<boolean>) {
      state.isPopUpOpen = action.payload;
    },

    // Reducer to update the one-page navigation menu data.
    setOnePageData(state, action: PayloadAction<IMenuDT[]>) {
      state.onePageData = action.payload;
    },
  },
});

export const {
  setIsVisible,
  setIsOnePage,
  toggleOffCanvas,
  togglePopUp,
  setOnePageData,
} = headerSlice.actions;

export default headerSlice.reducer;
