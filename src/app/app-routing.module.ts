import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from 'src/pages/add-user/add-user.component';
import { UserComponent } from 'src/pages/user/user.component';


const routes: Routes = [
  { path: 'Home', component: UserComponent },
  { path: 'AddUserPage', component: AddUserComponent,pathMatch: 'full' },
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
