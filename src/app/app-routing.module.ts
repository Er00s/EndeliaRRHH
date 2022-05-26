import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from '../app/pages/pages-routing.module';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'employeeList', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
           PagesRoutingModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
