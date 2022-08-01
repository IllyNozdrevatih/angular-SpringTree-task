import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatsListPage} from "./pages/cats-list/cats-list.page";
import {ContactUsPage} from "./pages/contact-us/contact-us.page";
import {CatsListFavouritesPage} from "./pages/cats-list-favourites/cats-list-favourites.page";
import {BreedsListPage} from "./pages/breeds-list/breeds-list.page";
import {NotFoundPage} from "./pages/not-found/not-found.page";

const routes: Routes = [
  { path: '', component: CatsListPage, title: 'Home page - cat list' },
  { path: 'contact-us', component: ContactUsPage, title: 'Contact us' },
  { path: 'favourites', component: CatsListFavouritesPage, title: 'Favourite cats' },
  { path: 'breeds', component: BreedsListPage, title: 'Breeds list' },
  { path: '404', component: NotFoundPage, title: 'Not found'  },
  { path: '**', redirectTo: '/404', title: 'Not found'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
