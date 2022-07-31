import { Component, OnInit } from '@angular/core';
import {BreedsListService} from "./breeds-list.service";
import {Store} from "@ngrx/store";
import {BreedCardInterface} from "./breed-card/breed-card.interface";
import {Observable} from "rxjs";
import {init, push} from "./store/breeds-list.actions";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.page.html',
  styleUrls: ['./breeds-list.page.css'],
  providers: [BreedsListService]
})
export class BreedsListPage implements OnInit {
  breedList$: Observable<BreedCardInterface[]>
  searchString = ''
  pageNumber = 1
  stopInfiniteScroll = false

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breedsListService: BreedsListService,
    private store: Store<{ breedList: BreedCardInterface[]}>
  ) {
    this.breedList$ = this.store.select('breedList')
  }

  ngOnInit(): void {
    let isLoaded = false
    this.breedList$.subscribe(data => {
      if (data.length > 0) {
        isLoaded = true
        return
      }
    })
    if (isLoaded) return

    this.activatedRoute.queryParams
      .subscribe(params => {
        const page = params.hasOwnProperty('page') ? params['page'] : this.pageNumber
        const searchString = params.hasOwnProperty('q') ? params['q'] : ''

        this.pageNumber = Number(page.trim())
        this.searchString = searchString.trim()
      })

    if (this.searchString.length === 0) {
      this.breedsListService.fetchBreeds().subscribe(data => {
        this.store.dispatch(init({breedList: data}))
      })
    } else {
      this.submitSearch(false)
    }
  }

  onScrollDown(){
    if (this.stopInfiniteScroll) return
    this.loadBreeds(this.pageNumber+1)
  }

  loadBreeds(pageNumber: number, loadMore = true) {
    this.pageNumber = pageNumber
    this.breedsListService.fetchBreeds(this.pageNumber).subscribe(data => {
      if (loadMore) {
        this.store.dispatch(push({breedList: data}))
      } else {
        this.store.dispatch(init({breedList: data}))
      }
    })
    this.router.navigate(
      ['/breeds'],
      {
        queryParams: {
          page: this.pageNumber,
        }
      }
    )
  }

  submitSearch(queryUpdate = true) {
    if (this.searchString.length === 0 ){
      this.stopInfiniteScroll = false
      this.loadBreeds(1, false)
      return
    }
    this.breedsListService.getBreedByName(this.searchString).subscribe(data => {
      this.store.dispatch(init({breedList: data}))
    })

    this.stopInfiniteScroll = true

    if (!queryUpdate) return;
    this.router.navigate(
      ['/breeds'],
      {
        queryParams: {
          q: this.searchString.trim(),
        }
      }
    )
  }

  isEmptyBreedsList(){
    let isEmpty = true
    this.breedList$.subscribe(data => {
      isEmpty = data.length === 0
    })

    return isEmpty
  }
}
