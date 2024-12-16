import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CRUD_OPERATION, S3CrudApiServiceService } from '../s3-crud-api-service.service';

type S3Form = {
  bucketName: FormControl<string>,
  objectKey?: FormControl<string>,
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
  private s3CrudApiService = inject(S3CrudApiServiceService);

  listForm: FormGroup<S3Form> = this.formBuilder.nonNullable.group({
    bucketName: ['', [Validators.required]],
  });

  onSubmit(type: CRUD_OPERATION) {
    switch (type) {
      case CRUD_OPERATION.LIST:
        this.listBuckets();
        break;
      case CRUD_OPERATION.CREATE:
        this.createBucket();
        break;
      case CRUD_OPERATION.UPLOAD:
        this.uploadFile();
        break;
      case CRUD_OPERATION.DELETE:
        this.deleteFile();
        break;
      case CRUD_OPERATION.DOWNLOAD:
        this.downloadFile();
        break;
    }
  }
  downloadFile() {
    // this.s3CrudApiService.download(this.uploadForm.value.bucketName, this.uploadForm.value.objectKey);
  }
  deleteFile() {
    // this.s3CrudApiService.delete(this.uploadForm.value.bucketName, this.uploadForm.value.objectKey);
  }
  uploadFile() {
    // this.s3CrudApiService.upload(this.uploadForm.value.bucketName, this.uploadForm.value.objectKey, this.uploadForm.value.filePath);
  }
  createBucket() {
    // this.s3CrudApiService.create(this.uploadForm.value.bucketName);
  }
  listBuckets() {
    this.s3CrudApiService.list(this.listForm.getRawValue().bucketName);
  }
}

