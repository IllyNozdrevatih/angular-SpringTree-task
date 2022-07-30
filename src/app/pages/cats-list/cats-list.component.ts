import { Component, OnInit } from '@angular/core';
import {CatCard, CatCardFavorite} from "./cat-card/cat-card.component.interface";
import {ConfigService} from "./config/config.service";
import {ActivatedRoute, Router} from "@angular/router";

import {Store} from "@ngrx/store";
import {add} from "../../store/favorites.actions";

enum OrderOptions {
  Rand = 'Rand', Desc = 'Desc', Asc = 'Asc'
}

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.css'],
  providers: [ConfigService]
})
export class CatsListComponent implements OnInit {
  catList:CatCardFavorite[] = []

  readonly formLimitOptions = [9, 12]
  formLimit = this.formLimitOptions[0]

  readonly formOrderOptions = ['Rand', 'Desc', 'Asc']
  formOrder = this.formOrderOptions[1]

  pageNumber = 1

  constructor(private configService: ConfigService, private router: Router, private activatedRoute: ActivatedRoute, private store: Store<{ favorites: CatCard[]}>) {

  }

  ngOnInit(){
    this.activatedRoute.queryParams
      .subscribe(params => {
        const page = params.hasOwnProperty('page') ? params['page'] : this.pageNumber
        const limit = params.hasOwnProperty('limit') ? params['limit'] : this.formLimit
        const order = params.hasOwnProperty('order') ? params['order'] : this.formOrder

        this.pageNumber = Number(page)
        this.formLimit = Number(limit)
        this.formOrder = String(order)
      });

    this.configService.fetchCats(this.formLimit, this.pageNumber, this.formOrder).subscribe((data) => {
      this.catList = data.map(item => { return  {...item, favorite: false} })
    })
  }

  handlerFormLimitSelect(limit: number){
    this.configService.fetchCats(limit, this.pageNumber, this.formOrder).subscribe((data) => {
      this.catList = data.map(item => { return  {...item, favorite: false} })
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
    this.configService.fetchCats(this.formLimit, this.pageNumber, order).subscribe((data) => {
      this.catList = data.map(item => { return  {...item, favorite: false} })
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
    this.configService.fetchCats(this.formLimit, pageNumber, this.formOrder).subscribe((data) => {
      if (scrolled){
        this.catList = [
          ...this.catList,
          ...data.map(item => { return  {...item, favorite: false} })
        ]
      } else {
        this.catList = data.map(item => { return  {...item, favorite: false} })
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

  addCatCardFavorites(catItemID: string){
    const catItemIndex = this.catList.findIndex(catItem => catItem.id === catItemID)
    const catItem = this.catList[catItemIndex]
    catItem.favorite = true
    this.store.dispatch(add({ catCard: catItem }))
  }

  onScrollDown(ev: any){
    this.handlerChangePagination(this.pageNumber+1, true)
    console.log("scrolled down!!", ev);
  }
}
