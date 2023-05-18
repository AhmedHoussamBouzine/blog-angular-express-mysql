import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UsersComponent } from './components/users/users.component';
import { HeroSectionComponent } from './components/home/hero-section/hero-section.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { LatestArticlesComponent } from './components/home/latest-articles/latest-articles.component';
import { TrendCategoriesComponent } from './components/home/trend-categories/trend-categories.component';
import { HeaderComponent } from './components/home/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthentificationComponent,
    ArticlesComponent,
    CategoriesComponent,
    UsersComponent,
    HeroSectionComponent,
    FooterComponent,
    LatestArticlesComponent,
    TrendCategoriesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
