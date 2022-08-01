import {createAction, props} from "@ngrx/store";
import {BreedCardComponentInterface} from "../breed-card/breed-card.component.interface";


export const init = createAction('[Breed list Component] init', props<{ breedList: BreedCardComponentInterface[] }>());
export const push = createAction('[Breed list Component] add', props<{ breedList: BreedCardComponentInterface[] }>());
