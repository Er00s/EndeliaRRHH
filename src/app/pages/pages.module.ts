import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SearcherComponent } from '../components/searcher/searcher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EmployeeListComponent,
    NavbarComponent,
    SearcherComponent
  ],
  exports:[PagesRoutingModule],
  imports: [
    CommonModule,   
    RouterModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
