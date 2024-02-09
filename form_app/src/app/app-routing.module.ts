import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    component: ListComponent,
    path:"list"
  },
  {
    component: TodolistComponent,
    path:"todo"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
