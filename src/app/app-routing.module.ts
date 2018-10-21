import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms'; 


const router: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: UserComponent},
  { path: 'user', component: UserComponent },
  {path: "user-list", component: UserListComponent}
];

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(
      router,
    ),
    CommonModule,
    FormsModule
    // other imports here
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
