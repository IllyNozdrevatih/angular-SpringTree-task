import {createFeatureSelector} from "@ngrx/store";
import {CatCardInterface} from "../pages/cats-list/cat-card/cat-card.component.interface";

export const selectCatList = createFeatureSelector<ReadonlyArray<CatCardInterface>>('catList')
export const selectFavorites = createFeatureSelector<ReadonlyArray<CatCardInterface>>('favorites')

