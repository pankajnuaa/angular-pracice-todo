import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TodoComponent } from './component/todo/todo.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'todo-list',
  component: TodoComponent
},

{
  path: '**',
  redirectTo: 'dashboard'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
