import {Component, OnInit} from '@angular/core';
import {CatsListService} from "../cats-list/cats-list.service";
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {CatCardInterface} from "../cats-list/cat-card/cat-card.component.interface";
import {remove} from "./store/favorites.actions";

@Component({
  selector: 'app-cats-list-favourites',
  templateUrl: './cats-list-favourites.page.html',
  styleUrls: ['./cats-list-favourites.page.css'],
  providers: [CatsListService]
})
export class CatsListFavouritesPage implements OnInit {
  favorite$: Observable<CatCardInterface[]>;
  allTodos$: any;

  catListFavorites:CatCardInterface[] = []

  constructor(private configService: CatsListService, private store: Store<{ favorites: CatCardInterface[] }>) {
    this.favorite$ = store.select('favorites')
   }


  ngOnInit(): void {
  }

  deleteCatCardFavorites(catID: string) {
    this.store.dispatch(remove({catCardID: catID}))
  }
}
