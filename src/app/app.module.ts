import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
   declarations: [
      AppComponent,
      UserListComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CommonModule,
       
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
