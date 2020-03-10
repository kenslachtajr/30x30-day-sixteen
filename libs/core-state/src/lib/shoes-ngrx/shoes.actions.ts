import { createAction, props } from '@ngrx/store';
import { Shoe } from '@ngrx-shoes/core-data';

export const shoeSelected = createAction(
  '[SHOE] Shoe Selected',
  props<{ selectedShoeId: string | number }>()
);

export const loadShoes = createAction('[SHOE] Load Shoes');

export const shoesLoaded = createAction(
  '[SHOE] Shoes Loaded',
  props<{ shoes: Shoe[] }>()
);

export const loadShoe = createAction(
  '[SHOE] Load Shoe',
  props<{shoe: Shoe}>()
  );

export const shoeLoaded = createAction(
  '[SHOE] Shoes Loaded',
  props<{ shoe: Shoe}>()
);

export const createShoe = createAction(
  '[SHOE] Create Shoe',
  props<{ shoe: Shoe }>()
);

export const shoeCreated = createAction(
  '[SHOE] Shoe Created',
  props<{ shoe: Shoe }>()
);

export const updateShoe = createAction(
  '[SHOE] Update Shoe',
  props<{ shoe: Shoe }>()
);

export const shoeUpdated = createAction(
  '[SHOE] Shoe Updated',
  props<{ shoe: Shoe }>()
);

export const deleteShoe = createAction(
  '[SHOE] Delete Shoe',
  props<{ shoe: Shoe }>()
);

export const shoeDeleted = createAction(
  '[SHOE] Shoe Deleted',
  props<{ shoe: Shoe }>()
);
