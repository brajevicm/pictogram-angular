import { Component, EventEmitter, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { humanizeBytes, UploadFile, UploadInput, UploadOutput } from 'ngx-uploader';
import { AuthService } from '../_services/auth.service';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import {API_URL, REGISTER} from '../../constants';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  registered = false;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  constructor(private _router: Router,
              private _http: Http,
              private _authService: AuthService,
              private _alertService: AlertService) {
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
  }

  onUploadOutput(output: UploadOutput): void {
    // console.log(output); // lets output to see what's going on in the console

    if (output.type === 'allAddedToQueue') { // when all files added in queue
      // uncomment this if you want to auto upload files when added
      // const event: UploadInput = {
      //   type: 'uploadAll',
      //   url: '/upload',
      //   method: 'POST',
      //   data: { foo: 'bar' },
      //   concurrency: 0
      // };
      // this.uploadInput.emit(event);
    } else if (output.type === 'addedToQueue') {
      this.files.push(output.file); // add file to array when added
    } else if (output.type === 'uploading') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') { // drag over event
      this.dragOver = true;
    } else if (output.type === 'dragOut') { // drag out event
      this.dragOver = false;
    } else if (output.type === 'drop') { // on drop event
      this.dragOver = false;
    }
  }

  startUpload(): void {  // manually start uploading
    const event: UploadInput = {
      type: 'uploadAll',
      url: API_URL + REGISTER,
      method: 'POST',
      data: {
        username: this.model.username,
        password: this.model.password,
        firstName: this.model.firstName,
        lastName: this.model.lastName,
        email: this.model.email
      },
      concurrency: 1
    };

    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({type: 'cancel', id: id});
  }

  login() {
    this.loading = true;
    this._authService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          let timer = TimerObservable.create(1000, 500);
          timer.subscribe(t => {
            location.reload();
            this._router.navigate(['returnUrl']);
          });
        },
        error => {
          this._alertService.error('Invalid username or password');
          this.loading = false;
        }
      )
    ;
  }

  register() {
    this.startUpload();
    this.registered = true;
    // this.loading = true;
    // this._userService.registerUser(
    //     this.model.username,
    //     this.model.password,
    //     this.model.firstName,
    //     this.model.lastName,
    //     this.model.postImage
    // )
    //     .subscribe(
    //         data => {
    //             let timer = TimerObservable.create(1000, 500);
    //             timer.subscribe(t => {
    //                 location.reload();
    //                 this._router.navigate(['returnUrl']);
    //             });
    //         },
    //         error => {
    //             this._alertService.error(error);
    //             this.loading = false;
    //         }
    //     )
    // ;
  }

}
