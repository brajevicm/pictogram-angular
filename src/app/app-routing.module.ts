import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './_guards/auth.guard';
import {ProfileComponent} from './profile/profile.component';
import {PostsComponent} from 'app/posts/posts.component';
import {UploadComponent} from './upload/upload.component';
import {SettingsComponent} from './profile/settings/settings.component';
import {ProfileGuard} from './_guards/profile.guard';
import {RegisterGuard} from './_guards/register.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'profile/:userid', canActivate: [ProfileGuard],
          component: ProfileComponent,
          children: [
            {path: 'posts', component: PostsComponent},
            {path: 'upvotes', component: PostsComponent},
            {path: 'comments', component: PostsComponent}, //CommentsComponent
            {path: 'settings', component: SettingsComponent}
          ]
        },
        {path: 'register', component: RegisterComponent, canActivate: [RegisterGuard] },
        {path: 'upload', component: UploadComponent, canActivate: [AuthGuard]},
        {path: '', component: PostsComponent}
      ]
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
