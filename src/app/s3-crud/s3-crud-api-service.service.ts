import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

//CRUD Operations for S3 Objects as enum
export enum CRUD_OPERATION {
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
  baseUrl = 'http://localhost:8080/s3'


  list$(bucketName: string, prefix: string): Observable<string> {
    //List S3 Buckets
    let httpParams = {"bucketName": bucketName, "prefix": prefix};
    return this.httpClient.get<string>(`${this.baseUrl}${CRUD_OPERATION.LIST}`, {
      params: httpParams,
    });
  }

  create$() {
    //Create S3 Bucket
    return this.httpClient.post(`${this.baseUrl}${CRUD_OPERATION.CREATE}`, {});
  }

  upload$() {
    //Upload File to S3 Bucket
    return this.httpClient.post(`${this.baseUrl}${CRUD_OPERATION.UPLOAD}`, {});
  }

  deleteFile$(bucketName: string, objectKey: string) {
    //Delete S3 Bucket
    let httpParams = new HttpParams().set('bucketName', bucketName).set('objectKey', objectKey);
    return this.httpClient.delete(`${this.baseUrl}${CRUD_OPERATION.DELETE}`, {params: httpParams});
  }

  downloadFile$() {
    //Download File from S3 Bucket
    return this.httpClient.get(`${this.baseUrl}${CRUD_OPERATION.DOWNLOAD}`, {responseType: 'blob' as 'json'});
  }

}
