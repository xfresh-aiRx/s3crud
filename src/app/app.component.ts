import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {S3FormComponent} from './s3-crud/s3-form/s3-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, S3FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'S3Api-Client';
}
