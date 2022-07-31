import {createAction, props} from "@ngrx/store";
import {CatCardInterface} from "../cat-card/cat-card.component.interface";

export const init = createAction('[Cats list Component] init', props<{ catList: ReadonlyArray<CatCardInterface> }>());
export const push = createAction('[Cats list Component] add', props<{ catList: ReadonlyArray<CatCardInterface> }>());
