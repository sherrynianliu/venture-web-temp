import { RootState } from '../rootReducer';

// Selector to get the current sort order
export const selectSortOrder = (state: RootState) => state.sort.sortOrder;
