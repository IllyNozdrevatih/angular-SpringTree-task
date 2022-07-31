import { createReducer, on } from '@ngrx/store';
import { init, push } from './cats-list.actions'
import {CatCardInterface} from "../cat-card/cat-card.component.interface";

export const catsListState: ReadonlyArray<CatCardInterface> = []

export const catListReducer = createReducer(
  catsListState,
  on(init, (state, {catList}) => [...catList]),
  on(push, (state, {catList}) => [...state, ...catList])
);
