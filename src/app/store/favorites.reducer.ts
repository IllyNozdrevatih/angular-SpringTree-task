import { createReducer, on } from '@ngrx/store';
import {add, initFavorites} from './favorites.actions';
import {CatCard} from "../pages/cats-list/cat-card/cat-card.component.interface";
import {CatCardFavourite} from "../pages/cats-list-favourites/cat-card-favourite.component.interface";

export interface CatsListFavoritesState {
  catsListFavorites: CatCardFavourite[]
}

export const initialState: CatCardFavourite[] = []

export const favoritesReducer = createReducer(
  initialState,
  on(add, (state, {catCard}) => [catCard]),
  // on(initFavorites, (state) => ({...state}))
);
