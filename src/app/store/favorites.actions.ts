import { createAction, props } from '@ngrx/store';
import {CatCard, CatCardFavorite} from "../pages/cats-list/cat-card/cat-card.component.interface";

export const add = createAction('[Cats list Favorites Component] Add', props<{ catCard: CatCardFavorite }>());
export const remove = createAction('[Cats list Favorites Component] Remove', props<{ catCardID: string }>());
