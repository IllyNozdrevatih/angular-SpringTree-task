import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatCardComponent } from './pages/cats-list/cat-card/cat-card.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormFeedbackComponent } from './pages/contact-us/form-feedback/form-feedback.component';
import { BaseModalComponent } from './base/base-modal/base-modal.component';
import { AppRoutingModule } from "./app-routing.module";
import { ContactUsPage } from './pages/contact-us/contact-us.page';
import { BasePaginationComponent } from './base/base-pagination/base-pagination.component';
import { CatsListFavouritesPage } from './pages/cats-list-favourites/cats-list-favourites.page';

import { StoreModule } from '@ngrx/store';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {catListReducer} from "./pages/cats-list/store/cats-list.reducer";
import {favoritesReducer} from "./pages/cats-list-favourites/store/favorites.reducer";
import {CatsListPage} from "./pages/cats-list/cats-list.page";
import { BreedsListPage } from './pages/breeds-list/breeds-list.page';
import { BreedCardComponent } from './pages/breeds-list/breed-card/breed-card.component';



@NgModule({
  declarations: [
    AppComponent,
    CatCardComponent,
    FormFeedbackComponent,
    BaseModalComponent,
    ContactUsPage,
    CatsListPage,
    BasePaginationComponent,
    CatsListFavouritesPage,
    BreedsListPage,
    BreedCardComponent,
  ],
  imports: [
    StoreModule.forRoot({
      catList: catListReducer,
      favorites: favoritesReducer,
    }),
    InfiniteScrollModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
