import { Component, OnInit } from '@angular/core';
import {CatCardInterface} from "./cat-card/cat-card.component.interface";
import {CatsListService} from "./cats-list.service";
import {ActivatedRoute, Router} from "@angular/router";

import {Store} from "@ngrx/store";
import {toggleFavorite} from "../cats-list-favourites/store/favorites.actions";
import {Observable} from "rxjs";
import {selectCatList} from "../../store/collection.selector";
import {init, push} from "./store/cats-list.actions";
import {selectFavoritesIDs} from "../cats-list-favourites/store/favorites.selectior";

enum OrderOptions {
  Rand = 'Rand', Desc = 'Desc', Asc = 'Asc'
}

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.page.html',
  styleUrls: ['./cats-list.page.css'],
  providers: [CatsListService]
})
export class CatsListPage implements OnInit {
  favorite$: Observable<CatCardInterface[]>;
  favoriteID$: Observable<string[]>;
  catList$: Observable<ReadonlyArray<CatCardInterface>>;

  readonly formLimitOptions = [9, 12]
  formLimit = this.formLimitOptions[0]

  readonly formOrderOptions = ['Rand', 'Desc', 'Asc']
  formOrder = this.formOrderOptions[1]

  pageNumber = 1

  constructor(
    private catListService: CatsListService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<{ favorites: CatCardInterface[]}>
  ) {
    this.favorite$ = this.store.select('favorites')
    this.catList$ = this.store.select(selectCatList)
    this.favoriteID$ = this.store.select(selectFavoritesIDs)
  }

  ngOnInit(){
    let isLoaded = false
    this.catList$.subscribe(data => {
      if (data.length > 0) {
        isLoaded = true
        return
      }
    })
    if (isLoaded) return

    this.activatedRoute.queryParams
      .subscribe(params => {
        const page = params.hasOwnProperty('page') ? params['page'] : this.pageNumber
        const limit = params.hasOwnProperty('limit') ? params['limit'] : this.formLimit
        const order = params.hasOwnProperty('order') ? params['order'] : this.formOrder

        this.pageNumber = Number(page)
        this.formLimit = Number(limit)
        this.formOrder = String(order)
      });

    this.catListService.fetchCats(this.formLimit, this.pageNumber, this.formOrder).subscribe((data) => {
      this.store.dispatch(init({catList: data}))
    })
  }

  handlerFormLimitSelect(limit: number){
    this.catListService.fetchCats(limit, this.pageNumber, this.formOrder).subscribe((data) => {
      this.store.dispatch(push({catList: data}))
    })
    this.formLimit = limit
    this.router.navigate(
      ['/'],
      {
        queryParams: {
          page: this.pageNumber,
          limit: this.formLimit,
          order: this.formOrder
        }
      }
    )
  }

  handlerFormOrderSelect(order: OrderOptions){
    this.catListService.fetchCats(this.formLimit, this.pageNumber, order).subscribe((data) => {
      this.store.dispatch(push({catList: data}))
    })
    this.formOrder = order
    this.router.navigate(
      ['/'],
      {
        queryParams: {
          page: this.pageNumber,
          limit: this.formLimit,
          order: order
        }
      }
    )
  }

  handlerChangePagination(pageNumber: number, scrolled = false){
    this.catListService.fetchCats(this.formLimit, pageNumber, this.formOrder).subscribe((data) => {
      if (scrolled){
        this.store.dispatch(push({catList: data}))
      } else {
        this.store.dispatch(init({catList: data}))
      }
    })
    this.pageNumber = pageNumber
    if (pageNumber === 1){
      this.router.navigate(
        ['/']
      )
      return
    }
    this.router.navigate(
      ['/'],
      {
        queryParams: {
          page: this.pageNumber,
          limit: this.formLimit,
          order: this.formOrder
        }
      }
    )
  }

  addCatCardFavorites(catItem: CatCardInterface){
    this.store.dispatch(toggleFavorite({ catCard: catItem }))
  }

  onScrollDown(){
    this.handlerChangePagination(this.pageNumber+1, true)
  }

  getIsFavorite(catItemID: string) {
    let isFavorite = false
    this.favoriteID$.subscribe(data => {
      isFavorite = data.includes(catItemID)
    })
    return isFavorite
  }
}
