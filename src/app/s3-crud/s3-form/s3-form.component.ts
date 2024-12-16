import {Component, DestroyRef, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
import {S3CrudApiServiceService} from '../s3-crud-api-service.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';

@Component({
  selector: 'app-s3-form',
  imports: [ReactiveFormsModule],
  templateUrl: './s3-form.component.html',
  standalone: true,
  styleUrl: './s3-form.component.css',
})
export class S3FormComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly s3CrudApiService = inject(S3CrudApiServiceService);
  private readonly destroyRef = inject(DestroyRef);

  listForm: FormGroup = this.formBuilder.nonNullable.group({
    bucketName: ['', [Validators.required]],
    prefix: ['', [Validators.required]],
  });

  deleteForm: FormGroup = this.formBuilder.nonNullable.group({
    bucketName: ['', [Validators.required]],
    objectKey: ['', [Validators.required]],
  });

  downloadFile() {
    // this.s3CrudApiService
  }

  deleteFile() {
    this.s3CrudApiService
      .deleteFile$(
        this.deleteForm.getRawValue().bucketName,
        this.deleteForm.getRawValue().objectKey,
      )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => console.log('File deleted' as string));
  }

  uploadFile() {
    // this.s3CrudApiService.upload(this.uploadForm.value.bucketName, this.uploadForm.value.objectKey, this.uploadForm.value.filePath);
  }

  createBucket() {
    // this.s3CrudApiService.create(this.uploadForm.value.bucketName);
  }

  listObjects() {
    this.s3CrudApiService
      .list$(
        this.listForm.getRawValue().bucketName,
        this.listForm.getRawValue().prefix,
      )
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map((value) => value)
      )
      .subscribe((value) => console.log(value));
  }
}
