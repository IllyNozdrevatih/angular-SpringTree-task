import { Component, OnInit } from '@angular/core';
import {BreedsListService} from "./breeds-list.service";
import {Store} from "@ngrx/store";
import {CatCardInterface} from "../cats-list/cat-card/cat-card.component.interface";
import {BreedCardInterface} from "./breed-card/breed-card.interface";
import {Observable} from "rxjs";
import {init} from "./store/breeds-list.actions";

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.page.html',
  styleUrls: ['./breeds-list.page.css'],
  providers: [BreedsListService]
})
export class BreedsListPage implements OnInit {
  breedList$: Observable<BreedCardInterface[]>

  constructor(
    private breedsListService: BreedsListService,
    private store: Store<{ breedList: BreedCardInterface[]}>
  ) {
    this.breedList$ = this.store.select('breedList')
  }

  ngOnInit(): void {
    this.breedsListService.fetchBreeds().subscribe(data => {
      this.store.dispatch(init({breedList: data}))
    })
    this.breedsListService.getBreedByName('abys').subscribe(data => {
      console.log('data', data)
    })
  }
}
