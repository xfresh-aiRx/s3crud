import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

type S3Form = {
  bucketName: FormControl<string>,
  objectKey: FormControl<string>,
  filePath?: FormControl<string>
};

@Component({
  selector: 'app-s3-form',
  imports: [ReactiveFormsModule],
  templateUrl: './s3-form.component.html',
  styleUrl: './s3-form.component.css'
})
export class S3FormComponent {
  private readonly formBuilder = inject(FormBuilder);

  private uploadForm: FormGroup<S3Form> = this.formBuilder.nonNullable.group({
    bucketName: ['', [Validators.required]],
    objectKey: [''],
  });

  onSubmit(form: FormGroup<S3Form>, type: 'download' | 'list' | 'create' | 'delete') {
    switch (type) {
      case 'download':
        console.log('Download form submitted:', form.value);
        break;
      case 'list':
        console.log('List form submitted:', form.value);
        break;
      case 'create':
        console.log('Create form submitted:', form.value);
        break;
      case 'delete':
        console.log('Delete form submitted:', form.value);
        break;
      default:
        console.error(`Invalid form type: ${type}`);
        break;
    }
  }
}

