import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { PostsModule } from 'app/posts/posts.module';
import { CommonModule } from '@angular/common';
import { AlertService } from 'app/_services/alert.service';
import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { UserService } from './_services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { PostGuard } from './_guards/post.guard';
import { UploadComponent } from './upload/upload.component';
import { NgUploaderModule } from 'ngx-uploader';
import { RegisterGuard } from './_guards/register.guard';
import { SharedService } from './_services/shared.service';
import {SettingsComponent} from './profile/settings/settings.component';
import {ProfileGuard} from './_guards/profile.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ProfileComponent,
    UploadComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    CommonModule,
    PostsModule,
    NgUploaderModule
  ],
  providers: [
    SharedService,
    AlertService,
    AuthService,
    UserService,
    AuthGuard,
    PostGuard,
    RegisterGuard,
    ProfileGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
