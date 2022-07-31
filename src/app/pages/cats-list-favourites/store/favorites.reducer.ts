import { createReducer, on } from '@ngrx/store';
import {add, remove, toggleFavorite} from './favorites.actions';
import {CatCard, CatCardFavorite} from "../../cats-list/cat-card/cat-card.component.interface";


export const initialState: ReadonlyArray<CatCard> = []

export const favoritesReducer = createReducer(
  initialState,
  on(add, (state, {catCard}) => [...state, catCard]),
  on(remove, (state, {catCardID}) => {
    return state.filter(catItem => catItem.id !== catCardID)
  }),
  on(toggleFavorite, (state, {catCard}) => {
    const itemIndex = state.findIndex(catItem => catItem.id === catCard.id)
    if (itemIndex === -1) {
      return [...state, catCard]
    }
    return state.filter(catItem => catItem.id !== catCard.id)
  })
);
