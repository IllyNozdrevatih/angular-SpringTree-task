import { createReducer, on } from '@ngrx/store';
import { init, push } from './breeds-list.actions';
import {BreedCardInterface} from '../breed-card/breed-card.interface';

export const catsListState: ReadonlyArray<BreedCardInterface> = []

export const breedListReducer = createReducer(
  catsListState,
  on(init, (state, {breedList}) => [...breedList]),
  on(push, (state, {breedList}) => [...state, ...breedList])
);
