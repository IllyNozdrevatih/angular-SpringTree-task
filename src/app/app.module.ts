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
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CatsListComponent } from './pages/cats-list/cats-list.component';
import { BasePaginationComponent } from './base/base-pagination/base-pagination.component';
import { CatsListFavouritesComponent } from './pages/cats-list-favourites/cats-list-favourites.component';

import { StoreModule } from '@ngrx/store';
import {favoritesReducer} from "./store/favorites.reducer";

import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    AppComponent,
    CatCardComponent,
    FormFeedbackComponent,
    BaseModalComponent,
    ContactUsComponent,
    CatsListComponent,
    BasePaginationComponent,
    CatsListFavouritesComponent,
  ],
  imports: [
    StoreModule.forRoot({
      favorites: favoritesReducer
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
