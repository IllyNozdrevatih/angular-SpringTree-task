import {createFeatureSelector} from "@ngrx/store";
import {CatCard} from "../pages/cats-list/cat-card/cat-card.component.interface";

export const selectCatList = createFeatureSelector<ReadonlyArray<CatCard>>('catList')
export const selectFavorites = createFeatureSelector<ReadonlyArray<CatCard>>('favorites')

