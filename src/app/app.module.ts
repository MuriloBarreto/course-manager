import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './courses/course-list.component';
import { StarCompnent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarCompnent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
