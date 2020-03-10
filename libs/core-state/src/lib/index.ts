import { ActionReducerMap } from '@ngrx/store';
import * as fromShoes from './shoes-ngrx/shoes.reducer';

export interface AppState {
  shoes: fromShoes.ShoesState;
}

export const reducers: ActionReducerMap<AppState> = {
  shoes: fromShoes.reducer
};

export const defaultState: AppState = {
  shoes: { ids: [] } as fromShoes.ShoesState
};
