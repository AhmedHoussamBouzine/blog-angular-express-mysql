import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { UsersComponent } from './components/users/users.component';
import { HeroSectionComponent } from './components/home/hero-section/hero-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { LatestArticlesComponent } from './components/home/latest-articles/latest-articles.component';
import { TrendCategoriesComponent } from './components/home/trend-categories/trend-categories.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ItemTableComponent } from './components/users/item-table/item-table.component';
import { HeadTableComponent } from './components/users/head-table/head-table.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddPopUpComponent } from './components/articles/add-pop-up/add-pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { DetailsComponent } from './components/articles/details/details.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddCategoriePopUpComponent } from './components/users/add-categorie-pop-up/add-categorie-pop-up.component';
import { UpdateUserPopUpComponent } from './components/users/update-user-pop-up/update-user-pop-up.component';
import { DeleteUserPopUpComponent } from './components/users/delete-user-pop-up/delete-user-pop-up.component';
import { DeleteCategoriePopUpComponent } from './components/users/delete-categorie-pop-up/delete-categorie-pop-up.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthentificationComponent,
    ArticlesComponent,
    UsersComponent,
    HeroSectionComponent,
    FooterComponent,
    LatestArticlesComponent,
    TrendCategoriesComponent,
    HeaderComponent,
    NotfoundComponent,
    ExploreComponent,
    ItemTableComponent,
    HeadTableComponent,
    AddPopUpComponent,
    DetailsComponent,
    AddCategoriePopUpComponent,
    UpdateUserPopUpComponent,
    DeleteUserPopUpComponent,
    DeleteCategoriePopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
