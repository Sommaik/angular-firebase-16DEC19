import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    const url = environment.API_ENDPOINT + '/user';
    return this.http.post( url, user);
  }

  login(user: any): Observable<any> {
    const url = environment.API_ENDPOINT + '/login/doLogin';
    return this.http.post( url, user);
  }

  list(): Observable<User[]> {
    const url = environment.API_ENDPOINT + '/user';
    return this.http.get<User[]>( url);
  }

  delete(id: string): Observable<any> {
    const url = environment.API_ENDPOINT + '/user/' + id;
    return this.http.delete( url);
  }

}
