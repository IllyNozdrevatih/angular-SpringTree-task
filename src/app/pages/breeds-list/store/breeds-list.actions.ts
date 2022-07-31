import {createAction, props} from "@ngrx/store";
import {BreedCardInterface} from "../breed-card/breed-card.interface";


export const init = createAction('[Breed list Component] init', props<{ breedList: BreedCardInterface[] }>());
export const push = createAction('[Breed list Component] add', props<{ breedList: BreedCardInterface[] }>());
