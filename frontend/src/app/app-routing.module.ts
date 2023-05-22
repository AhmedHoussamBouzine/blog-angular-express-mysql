import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersComponent } from './components/users/users.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ExploreComponent } from './components/explore/explore.component';
import { DetailsComponent } from './components/articles/details/details.component';
import { AuthGuard } from './core/guard/auth.guard';
import { MyarticlesComponent } from './components/articles/myarticles/myarticles.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'explore',component:ExploreComponent,canActivate: [AuthGuard]},
    {path:'articles',component:ArticlesComponent,canActivate: [AuthGuard]},
    {path:'articles/:id',component:DetailsComponent,canActivate: [AuthGuard]},
    {path:'manage',component:UsersComponent,canActivate: [AuthGuard]},
    {path:'myarticles',component:MyarticlesComponent,canActivate: [AuthGuard]},
    {path:'login',component:AuthentificationComponent},
    {path:'**',component:NotfoundComponent,pathMatch:"prefix"}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
