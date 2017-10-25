import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  constructor(private http: Http) {}

  Http(url) {
    return this.http.get(url)
      .map((res) => {
          return res.json();
      })
      .catch(this.handleError);
  }

  public handleError = (error: any) => {
    console.error('Erorr', error);
    return Observable.throw(error.message || error);
  }
}
