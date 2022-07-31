import { Component, OnInit } from '@angular/core';
import {BreedsListService} from "./breeds-list.service";

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.page.html',
  styleUrls: ['./breeds-list.page.css'],
  providers: [BreedsListService]
})
export class BreedsListPage implements OnInit {

  constructor(private breedsListService: BreedsListService) {

  }

  ngOnInit(): void {
    this.breedsListService.fetchBreeds().subscribe(data => {
      console.log('data', data)
    })
    this.breedsListService.getBreedByName('abys').subscribe(data => {
      console.log('data', data)
    })
  }
}
