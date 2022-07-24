import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CatCard} from "../cat-card/cat-card.component.interface";
import {catchError, throwError} from "rxjs";

@Injectable()
export class ConfigService {
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
  fetchCats(limit = 3, pageNumber = 0, order = 'Desc'){
    return this.http
      .get<CatCard[]>(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${pageNumber}&order=${order}`)
      .pipe(catchError(this.handleError));
  }
}
