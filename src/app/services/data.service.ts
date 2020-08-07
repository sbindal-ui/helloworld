import { catchError, map } from 'rxjs/operators';
import { badinput } from './../common/bad-input';
import { Apperror } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { notfounderrror } from './../common/not-error';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
    .pipe(
      catchError(err=>this.handleError(err))
    )
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
        catchError(err=>this.handleError(err))); 
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        catchError(err=>this.handleError(err)))
     }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
    .pipe(
        catchError(err=>this.handleError(err)))
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new badinput(error.json()));
  
    if (error.status === 404)
      return Observable.throw(new notfounderrror());
    
    return Observable.throw(new Apperror(error));
  }
}
