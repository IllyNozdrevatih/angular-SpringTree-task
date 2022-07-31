import {createAction, props} from "@ngrx/store";
import {BreedCardInterface} from "../breed-card/breed-card.interface";


export const init = createAction('[Cats list Component] init', props<{ breedList: ReadonlyArray<BreedCardInterface>}>());
export const push = createAction('[Cats list Component] add', props<{ breedList: ReadonlyArray<BreedCardInterface> }>());
