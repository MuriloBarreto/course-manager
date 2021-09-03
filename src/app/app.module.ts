import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './courses/course-list.component';
import { StarCompnent } from './shared/component/star/star.component';
import { ReplacePipe } from './shared/pipe/replace.pipe';
import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import { Error404Component } from './core/component/error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },



    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
