import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { UsersComponent } from './components/users/users.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ItemTableComponent } from './components/users/item-table/item-table.component';
import { HeadTableComponent } from './components/users/head-table/head-table.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddPopUpComponent } from './components/articles/add-pop-up/add-pop-up.component';
import {AddPopUpUserComponent} from './components/users/add-pop-up/add-pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { DetailsComponent } from './components/articles/details/details.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddCategoriePopUpComponent } from './components/users/add-categorie-pop-up/add-categorie-pop-up.component';
import { UpdateUserPopUpComponent } from './components/users/update-user-pop-up/update-user-pop-up.component';
import { DeleteUserPopUpComponent } from './components/users/delete-user-pop-up/delete-user-pop-up.component';
import { DeleteCategoriePopUpComponent } from './components/users/delete-categorie-pop-up/delete-categorie-pop-up.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { MyarticlesComponent } from './components/articles/myarticles/myarticles.component';
import { UpdatePopUpComponent } from './components/articles/update-pop-up/update-pop-up.component';
import { DeletePopUpComponent } from './components/articles/delete-pop-up/delete-pop-up.component';
import { RegisterComponent } from './components/authentification/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthentificationComponent,
    ArticlesComponent,
    UsersComponent,
    FooterComponent,
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
    DeleteCategoriePopUpComponent,
    AddPopUpUserComponent,
    MyarticlesComponent,
    UpdatePopUpComponent,
    DeletePopUpComponent,
    RegisterComponent
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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
