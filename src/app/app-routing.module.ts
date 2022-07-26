import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormFeedbackComponent} from "./pages/contact-us/form-feedback/form-feedback.component";
import {CatsListComponent} from "./pages/cats-list/cats-list.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {CatsListFavouritesComponent} from "./pages/cats-list-favourites/cats-list-favourites.component";

const routes: Routes = [
  { path: '', component: CatsListComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'favourites', component: CatsListFavouritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
