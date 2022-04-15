import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UpdatecrudComponent } from './updatecrud/updatecrud.component';

const routes: Routes = [
  { path: 'first-component', component: UpdatecrudComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CrudModule { }
