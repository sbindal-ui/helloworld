import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersService } from './github-followers.service';
import { DataService } from './services/data.service';
import { ErrorHandler, Component } from '@angular/core';
import { PostService } from './services/post.service';
import {appErrorHandler} from "./common/error-handler"
import { SignupFormComponent } from './signup-form/signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { courseService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LIKEComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule }    from '@angular/common/http';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LIKEComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    PostsComponent,
    ChangePasswordComponent,
    GithubFollowersComponent,
    NavbarComponent,
    GithubProfileComponent,
    NotFoundComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //path what is shown in browser and home component which we want to route
    //confire routes
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
         //we have passed parameter called username which is passed at runtime
        //  {path:"followers/:id",component:GithubProfileComponent},earlier
        {path:"followers/:id/:username",component:GithubProfileComponent},
         //placed above else below one will work always
      {path:"followers",component:GithubFollowersComponent},
  
      {path:"posts",component:PostsComponent},
      //**  represents wild card can catch anything
      {path:"**",component:NotFoundComponent},
    ])

  ],
  providers: [
    courseService,
    PostService,
    DataService,
    GithubFollowersService,
    {provide:ErrorHandler,useClass:appErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
