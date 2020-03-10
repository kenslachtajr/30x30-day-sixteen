import { Injectable } from '@angular/core';
import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as fromShoes from './shoes.reducer';
import * as shoesActions from './shoes.actions';
import * as shoesSelectors from './shoes.selector';
import { Shoe } from '@ngrx-shoes/core-data';

@Injectable({
  providedIn: 'root'
})
export class ShoesFacade {
  allShoes$ = this.store.pipe(select(shoesSelectors.selectAllShoes));
  selectedShoe$ = this.store.pipe(select(shoesSelectors.selectShoe));
  shoeLoading$ = this.store.pipe(select(shoesSelectors.selectShoesLoading));
  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === shoesActions.createShoe({} as any).type ||
        action.type === shoesActions.updateShoe({} as any).type ||
        action.type === shoesActions.deleteShoe({} as any).type
    )
  );

  constructor(
    private actions$: ActionsSubject,
    private store: Store<fromShoes.ShoesPartialState>
  ) {}

  selectShoe(selectedShoeId: string | number) {
    this.dispatch(shoesActions.shoeSelected({ selectedShoeId }));
  }

  loadShoes() {
    this.dispatch(shoesActions.loadShoes());
  }

  loadShoe(shoe: Shoe) {
    this.dispatch(shoesActions.loadShoe({ shoe }));
  }

  createShoe(shoe: Shoe) {
    this.dispatch(shoesActions.createShoe({ shoe }));
  }

  updateShoe(shoe: Shoe) {
    this.dispatch(shoesActions.updateShoe({ shoe }));
  }

  deleteShoe(shoe: Shoe) {
    this.dispatch(shoesActions.deleteShoe({ shoe }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
