import {Component, OnInit} from '@angular/core';
import {CatsListService} from "../cats-list/cats-list.service";
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {CatCard, CatCardFavorite} from "../cats-list/cat-card/cat-card.component.interface";
import {remove} from "./store/favorites.actions";

@Component({
  selector: 'app-cats-list-favourites',
  templateUrl: './cats-list-favourites.component.html',
  styleUrls: ['./cats-list-favourites.component.css'],
  providers: [CatsListService]
})
export class CatsListFavouritesComponent implements OnInit {
  favorite$: Observable<CatCardFavorite[]>;
  allTodos$: any;

  catListFavorites:CatCardFavorite[] = []

  constructor(private configService: CatsListService, private store: Store<{ favorites: CatCardFavorite[] }>) {
    this.favorite$ = store.select('favorites')
   }


  ngOnInit(): void {
  }

  deleteCatCardFavorites(catID: string) {
    this.store.dispatch(remove({catCardID: catID}))
  }
}
