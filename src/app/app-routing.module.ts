import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatsListPage} from "./pages/cats-list/cats-list.page";
import {ContactUsPage} from "./pages/contact-us/contact-us.page";
import {CatsListFavouritesPage} from "./pages/cats-list-favourites/cats-list-favourites.page";
import {BreedsListPage} from "./pages/breeds-list/breeds-list.page";

const routes: Routes = [
  { path: '', component: CatsListPage },
  { path: 'contact-us', component: ContactUsPage },
  { path: 'favourites', component: CatsListFavouritesPage },
  { path: 'breeds', component: BreedsListPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
