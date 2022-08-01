import { createReducer, on } from '@ngrx/store';
import { init, push } from './breeds-list.actions';
import {BreedCardComponentInterface} from '../breed-card/breed-card.component.interface';

export const catsListState: ReadonlyArray<BreedCardComponentInterface> = []

export const breedListReducer = createReducer(
  catsListState,
  on(init, (state, {breedList}) => [...breedList]),
  on(push, (state, {breedList}) => [...state, ...breedList])
);
