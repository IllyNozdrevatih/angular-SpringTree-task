import {createAction, props} from "@ngrx/store";
import {CatCard, CatCardFavorite} from "../cat-card/cat-card.component.interface";

export const init = createAction('[Cats list Component] init', props<{ catList: CatCard[] }>());
export const push = createAction('[Cats list Component] add', props<{ catList: CatCard[] }>());
