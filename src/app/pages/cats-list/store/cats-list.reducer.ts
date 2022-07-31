import { createReducer, on } from '@ngrx/store';
import { init, push } from './cats-list.actions'
import {CatCard} from "../cat-card/cat-card.component.interface";

export const catsListState: ReadonlyArray<CatCard> = []

export const catListReducer = createReducer(
  catsListState,
  on(init, (state, {catList}) => [...catList]),
  on(push, (state, {catList}) => [...state, ...catList])
);
