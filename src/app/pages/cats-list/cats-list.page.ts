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
    private store: Store<{ favorites: CatCardInterface[], catList: CatCardInterface[] }>
  ) {
    this.favorite$ = this.store.select('favorites')
    this.catList$ = this.store.select('catList')
    this.favoriteID$ = this.store.select(selectFavoritesIDs)
  }

  ngOnInit(){
    // check data in state. If state full, don't do new request
    let isLoaded = false
    this.catList$.subscribe(data => {
      if (data.length > 0) {
        isLoaded = true
        return
      }
    })
    if (isLoaded) return

    // get queryParams and save in component variables
    this.activatedRoute.queryParams
      .subscribe(params => {
        const page = params.hasOwnProperty('page') ? params['page'] : this.pageNumber
        const limit = params.hasOwnProperty('limit') ? params['limit'] : this.formLimit
        const order = params.hasOwnProperty('order') ? params['order'] : this.formOrder

        this.pageNumber = Number(page.trim())
        this.formLimit = Number(limit.trim())
        this.formOrder = String(order.trim())
      });

    // load data by queryParams
    this.catListService.fetchCats(this.formLimit, this.pageNumber, this.formOrder).subscribe((data) => {
      this.store.dispatch(init({catList: data}))
    })
  }

  /**
   *
   * @param limit
   */
  handlerFormLimitSelect(limit: number){
    this.formLimit = limit
    this.handlerChangePagination(this.pageNumber, false, true)
  }

  /**
   *
   * @param order
   */
  handlerFormOrderSelect(order: OrderOptions){
    this.formOrder = order
    this.handlerChangePagination(this.pageNumber, false, true)
  }

  /**
   *
   * @param pageNumber
   * @param scrolled
   * @param updateQuery
   */
  handlerChangePagination(pageNumber: number, scrolled = false, updateQuery = false){
    this.catListService.fetchCats(this.formLimit, pageNumber, this.formOrder).subscribe((data) => {
      if (scrolled){
        this.store.dispatch(push({catList: data}))
      } else {
        this.store.dispatch(init({catList: data}))
      }
    })
    this.pageNumber = pageNumber
    if (pageNumber === 1 && !updateQuery){
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

  /**
   *
   * @param catItem
   */
  addCatCardFavorites(catItem: CatCardInterface){
    this.store.dispatch(toggleFavorite({ catCard: catItem }))
  }

  onScrollDown(){
    this.handlerChangePagination(this.pageNumber+1, true)
  }

  /**
   *
   * @param catItemID
   */
  getIsFavorite(catItemID: string) {
    let isFavorite = false
    this.favoriteID$.subscribe(data => {
      isFavorite = data.includes(catItemID)
    })
    return isFavorite
  }

  isEmptyCatList(){
    let isEmpty = true
    this.catList$.subscribe(data => {
      isEmpty = data.length === 0
    })

    return isEmpty
  }
}
