import {Component, OnInit} from '@angular/core';
import {CatCard} from "./cat-card/cat-card.component.interface";
import {ConfigService} from "./config/config.service";
import { Router, ActivatedRoute } from '@angular/router';

enum OrderOptions {
  Rand = 'Rand', Desc = 'Desc', Asc = 'Asc'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfigService]
})

export class AppComponent implements OnInit {
  catList:CatCard[] = []

  readonly formLimitOptions = [3, 6]
  formLimit = this.formLimitOptions[0]

  readonly formOrderOptions = ['Rand', 'Desc', 'Asc']
  formOrder = this.formOrderOptions[1]

  pageNumber = 1

  constructor(private configService: ConfigService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
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
      this.catList = data
    })
  }

  handlerFormLimitSelect(limit: number){
    this.configService.fetchCats(limit, this.pageNumber, this.formOrder).subscribe((data) => {
      this.catList = data
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
      this.catList = data
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

  handlerChangePagination(pageNumber: number){
    this.configService.fetchCats(this.formLimit, pageNumber, this.formOrder).subscribe((data) => {
      this.catList = data
    })
    this.pageNumber = pageNumber
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
}
