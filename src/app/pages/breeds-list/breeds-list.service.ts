import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {catchError, throwError} from "rxjs";
import {BreedCardInterface} from "./breed-card/breed-card.interface";

@Injectable()
export class BreedsListService {
  constructor(private http: HttpClient) {

  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  /**
   *
   * @param pageNumber
   * @param limit
   */
  fetchBreeds(pageNumber = 0, limit = 9){
    return this.http
      .get<BreedCardInterface[]>(`https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${pageNumber}`,{
        headers: {
          'x-api-key': '6a47c858-707f-4dc7-a309-cb4cdf0365ae'
        }}
      )
      .pipe(catchError(this.handleError));
  }

  /**
   *
   * @param name
   */
  getBreedByName(name: string){
    return this.http
      .get<BreedCardInterface[]>(`https://api.thecatapi.com/v1/breeds/search?q=${name}`,{
        headers: {
          'x-api-key': '6a47c858-707f-4dc7-a309-cb4cdf0365ae'
        }}
      )
      .pipe(catchError(this.handleError));
  }
}
