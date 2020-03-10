import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as shoesActions from './shoes.actions';
import { Shoe } from '@ngrx-shoes/core-data';

export const SHOES_FEATURE_KEY = 'shoes';

export interface ShoesState extends EntityState<Shoe> {
  selectedShoeId?: string | number;
  isLoading: boolean;
}

export interface ShoesPartialState {
  readonly [SHOES_FEATURE_KEY]: ShoesState;
}

export const shoesAdapter: EntityAdapter<Shoe> = createEntityAdapter<Shoe>();

export const initialState: ShoesState = shoesAdapter.getInitialState({
  selectedShoeId: null,
  isLoading: false
});

const shoesReducer = createReducer(
  initialState,
  on(shoesActions.shoeSelected, (state, { selectedShoeId }) =>
    Object.assign({}, state, { selectedShoeId })
  ),
  on(shoesActions.shoesLoaded, (state, { shoes }) =>
    shoesAdapter.addAll(shoes, { ...state, isLoading: false })
  ),
  on(shoesActions.shoeCreated, (state, { shoe }) =>
    shoesAdapter.addOne(shoe, { ...state, isLoading: false })
  ),
  on(shoesActions.shoeUpdated, (state, { shoe }) =>
    shoesAdapter.upsertOne(shoe, { ...state, isLoading: false })
  ),
  on(shoesActions.shoeDeleted, (state, { shoe }) =>
    shoesAdapter.removeOne(shoe.id, { ...state, isLoading: false })
  ),
  on(
    shoesActions.loadShoes,
    shoesActions.createShoe,
    shoesActions.updateShoe,
    shoesActions.deleteShoe,
    state => ({
      ...state,
      isLoading: true
    })
  )
);

export function reducer(state: ShoesState | undefined, action: Action) {
  return shoesReducer(state, action);
}
