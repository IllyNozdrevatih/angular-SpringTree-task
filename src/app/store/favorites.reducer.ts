import { createReducer, on } from '@ngrx/store';
import {add, remove} from './favorites.actions';
import {CatCard} from "../pages/cats-list/cat-card/cat-card.component.interface";

export interface CatsListFavoritesState {
  catsListFavorites: CatCard[]
}

export const initialState: CatCard[] = []

export const favoritesReducer = createReducer(
  initialState,
  on(add, (state, {catCard}) => [...state, catCard]),
  on(remove, (state, {catCardID}) => {
    return state.filter(catItem => catItem.id !== catCardID)
  })
);
