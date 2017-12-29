import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SwapiService {

  private api = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) { }

  getPlanetsList(url): Observable<any> {
    return this.http.get(url ? url : this.api);
  }

}
