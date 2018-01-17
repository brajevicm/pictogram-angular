import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from 'app/posts/posts.component';
import { UploadComponent } from './upload/upload.component';
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
        {path: 'register', component: RegisterComponent },
        {path: 'upload', component: UploadComponent, canActivate: [AuthGuard]},
        {path: '', component: PostsComponent}
      ]
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
