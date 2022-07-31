import { createAction, props } from '@ngrx/store';
import {CatCardInterface} from "../../cats-list/cat-card/cat-card.component.interface";

export const add = createAction('[Cats list Favorites Component] Add', props<{ catCard: CatCardInterface }>());
export const remove = createAction('[Cats list Favorites Component] Remove', props<{ catCardID: string }>());
export const toggleFavorite = createAction('[Cats list Favorites Component] Toggle favorite', props<{ catCard: CatCardInterface }>());
