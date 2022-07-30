import { createSelector } from '@ngrx/store';
import {CatsListFavoritesState, initialState} from './favorites.reducer';

export interface AppState {
  catsListFavorites: CatsListFavoritesState;
}


export const selectTodos = (state: AppState) => state.catsListFavorites;
export const selectAllTodos = createSelector(
  selectTodos,
  (state: CatsListFavoritesState) => state.catsListFavorites
);
