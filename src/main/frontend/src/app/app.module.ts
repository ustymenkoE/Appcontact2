import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForm} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { UsersComponent } from './content/users/users.component';
import { AdduserComponent } from './content/adduser/adduser.component';
import {HttpClientModule} from "@angular/common/http";
import { UserdetailsComponent } from './content/userdetails/userdetails.component';

import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
      path: '',
      component: UsersComponent
  },
  {
     path: 'users/show',
     component: UsersComponent
  },
  {
     path: 'users/add',
     component: AdduserComponent
  },
  {
    path: 'user/details',
    component: UserdetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    UsersComponent,
    AdduserComponent,
    UserdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
