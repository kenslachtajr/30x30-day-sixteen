import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SHOES_FEATURE_KEY,
  shoesAdapter,
  ShoesPartialState,
  ShoesState
} from './shoes.reducer';

export const selectShoesState = createFeatureSelector<
  ShoesPartialState,
  ShoesState
>(SHOES_FEATURE_KEY);

const { selectAll, selectEntities } = shoesAdapter.getSelectors();

export const selectShoesLoading = createSelector(
  selectShoesState,
  (state: ShoesState) => selectAll(state)
);

export const selectAllShoes = createSelector(
  selectShoesState,
  (state: ShoesState) => selectAll(state)
);

export const selectShoesEntities = createSelector(
  selectShoesState,
  (state: ShoesState) => selectEntities(state)
);

export const selectShoeId = createSelector(
  selectShoesState,
  (state: ShoesState) => state.selectedShoeId
);

export const selectShoe = createSelector(
  selectShoesEntities,
  selectShoeId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
