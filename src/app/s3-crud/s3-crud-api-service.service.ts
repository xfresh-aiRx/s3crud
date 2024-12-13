import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

//CRUD Operations for S3 Objects as enum
enum CRUD_OPERATION {
  LIST = '/list',
  CREATE = '/create',
  UPLOAD = '/upload',
  DELETE = '/delete',
  DOWNLOAD = '/download'
}

//CRUD Operations for S3 Buckets
@Injectable({
  providedIn: 'root'
})
export class S3CrudApiServiceService {
  httpClient = inject(HttpClient);
  baseUrl = 'localhost:8080/s3'


  list(bucketName: string): Observable<string[]> {
    //List S3 Buckets
    let bucket = {"bucketName": bucketName};
    return this.httpClient.get<string[]>(`${this.baseUrl}${CRUD_OPERATION.LIST}`, {params: bucket});
  }

  create() {
    //Create S3 Bucket
    return this.httpClient.post(`${this.baseUrl}${CRUD_OPERATION.CREATE}`, {});
  }

  upload() {
    //Upload File to S3 Bucket
    return this.httpClient.post(`${this.baseUrl}${CRUD_OPERATION.UPLOAD}`, {});
  }

  deleteFile(bucketName: string, objectKey: string) {
    //Delete S3 Bucket
    return this.httpClient.delete(`${this.baseUrl}${CRUD_OPERATION.DELETE}`);
  }

  downloadFile() {
    //Download File from S3 Bucket
    return this.httpClient.get(`${this.baseUrl}${CRUD_OPERATION.DOWNLOAD}`, {responseType: 'blob' as 'json'});
  }

}
