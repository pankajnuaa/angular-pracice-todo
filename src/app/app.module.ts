import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { TodoComponent } from './component/todo/todo.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
