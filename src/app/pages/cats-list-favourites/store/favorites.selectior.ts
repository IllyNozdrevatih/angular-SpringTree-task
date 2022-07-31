import {createSelector} from "@ngrx/store";
import {CatCardInterface} from "../../cats-list/cat-card/cat-card.component.interface";
import {selectFavorites} from "../../../store/collection.selector";

export const selectFavoritesIDs = createSelector(
  selectFavorites,
  (state: ReadonlyArray<CatCardInterface>) => {
    return state.map(catItem => catItem.id)
  }
);
