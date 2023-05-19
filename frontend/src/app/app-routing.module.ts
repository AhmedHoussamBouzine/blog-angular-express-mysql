import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersComponent } from './components/users/users.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ExploreComponent } from './components/explore/explore.component';
import { DetailsComponent } from './components/articles/details/details.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'explore',component:ExploreComponent},
    {path:'articles',component:ArticlesComponent},
    {path:'articles/:id',component:DetailsComponent},
    {path:'manage',component:UsersComponent},
    {path:'login',component:AuthentificationComponent},
    {path:'**',component:NotfoundComponent,pathMatch:"prefix"}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
