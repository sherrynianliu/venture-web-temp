import { RootState } from '../rootReducer';

// Selector for header visibility
export const selectIsVisible = (state: RootState) => state.header.isVisible;

// Selector for header visibility
export const selectIsOnePage = (state: RootState) => state.header.isOnePage;

// Selector for off-canvas state
export const selectIsOffCanvasOpen = (state: RootState) =>
  state.header.isOffCanvasOpen;

// Selector for popup state
export const selectIsPopUpOpen = (state: RootState) => state.header.isPopUpOpen;

// Selector for one-page menu data
export const selectOnePageData = (state: RootState) => state.header.onePageData;
