import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as shoesActions from './shoes.actions';
import { ShoesFacade } from './shoes.facade';
import {
  Shoe,
  ShoesService,
  NotifyService
} from '@ngrx-shoes/core-data';
import { ShoesPartialState } from './shoes.reducer';

@Injectable()
export class ShoesEffect {
  loadShoes$ = createEffect(() =>
    this.dataPersistence.fetch(shoesActions.loadShoes, {
      run: (
        action: ReturnType<typeof shoesActions.loadShoes>,
        state: ShoesPartialState
      ) => {
        return this.shoesService
          .all()
          .pipe(
            map((shoes: Shoe[]) =>
              shoesActions.shoesLoaded({ shoes })
            )
          );
      },
      onError: (
        action: ReturnType<typeof shoesActions.loadShoes>,
        error
      ) => {
        this.notify.notification('Effect Load All Error', error);
      }
    })
  );

  loadShoe$ = createEffect(() =>
    this.dataPersistence.fetch(shoesActions.loadShoe, {
      run: (
        action: ReturnType<typeof shoesActions.loadShoe>,
        state: ShoesPartialState
      ) => {
        return this.shoesService
          .findOne(action.shoe)
          .pipe(
            map((shoe: Shoe) =>
              shoesActions.shoeLoaded({ shoe })
            )
          );
      },
      onError: (
        action: ReturnType<typeof shoesActions.loadShoe>,
        error
      ) => {
        this.notify.notification('Effect Load Error:', error);
      }
    })
  );

  selectShoeOnLoad$ = createEffect(() =>
    this.dataPersistence.actions.pipe(
      ofType(shoesActions.shoeLoaded),
      map(({ shoe }) =>
        shoesActions.shoeSelected({ selectedShoeId: shoe.id })
      )
    )
  );

  createShoe$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(shoesActions.createShoe, {
      run: (
        action: ReturnType<typeof shoesActions.createShoe>,
        state: ShoesPartialState
      ) => {
        return this.shoesService.create(action.shoe).pipe(
          map((shoe: Shoe) =>
            shoesActions.shoeCreated({ shoe })
          ),
          // tap(() => this.shoesFacade.loadShoes())
        );
      },
      onError: (
        action: ReturnType<typeof shoesActions.createShoe>,
        error
      ) => {
        this.notify.notification('Effect Create Error:', error);
      }
    })
  );

  updateShoe$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(shoesActions.updateShoe, {
      run: (
        action: ReturnType<typeof shoesActions.updateShoe>,
        state: ShoesPartialState
      ) => {
        return this.shoesService.update(action.shoe).pipe(
          map((shoe: Shoe) =>
            shoesActions.shoeUpdated({ shoe })
          ),
          // tap(() => this.shoesService.all())
        );
      },
      onError: (
        action: ReturnType<typeof shoesActions.updateShoe>,
        error
      ) => {
        this.notify.notification('Effect Update Error:', error);
      }
    })
  );

  deleteShoe$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(shoesActions.deleteShoe, {
      run: (
        action: ReturnType<typeof shoesActions.deleteShoe>,
        state: ShoesPartialState
      ) => {
        return this.shoesService
          .delete(action.shoe)
          .pipe(
            map(() =>
              shoesActions.shoeDeleted({ shoe: action.shoe })
            )
          );
      },
      onError: (
        action: ReturnType<typeof shoesActions.deleteShoe>,
        error
      ) => {
        this.notify.notification('Effect Delete Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ShoesPartialState>,
    private shoesService: ShoesService,
    private shoesFacade: ShoesFacade,
    private notify: NotifyService
  ) {}
}
