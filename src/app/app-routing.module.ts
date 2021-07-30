import { OneCarComponent } from './one-car/one-car.component';
import { AuthorComponent } from './author/author.component';
import { CarsComponent } from './cars/cars.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: LayoutComponent,
  children: [
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "about",
      component: AboutComponent
    },
    {
      path: "contact",
      component: ContactComponent
    },
    {
      path: "cars",
      component: CarsComponent
    },
    {
      path: "cars/:id",
      component: OneCarComponent
    },
    {
      path: "author",
      component: AuthorComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
