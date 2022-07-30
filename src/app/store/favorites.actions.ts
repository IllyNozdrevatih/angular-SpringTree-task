import { createAction, props } from '@ngrx/store';
import {CatCard} from "../pages/cats-list/cat-card/cat-card.component.interface";
import {CatCardFavourite} from "../pages/cats-list-favourites/cat-card-favourite.component.interface";

export const initFavorites = createAction('[Cats list Favorites Component] ini state');
export const add = createAction('[Cats list Favorites Component] Add', props<{ catCard: CatCardFavourite }>());
