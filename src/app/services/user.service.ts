import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Note} from '../interfaces/note';


import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import {Urls} from '../constants/urls';
import {not} from 'rxjs/internal-compatibility';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {
u: any;
p: any;
constructor(private storage: Storage, private http: HttpClient) {
  }



  gettoken( p, s): string{
    let user = p;
    const pass = s;


    this.http.post('http://localhost:8080/user/loginUser', {
      username: user,
      password: pass
    }).subscribe(response =>  user = JSON.stringify(response));

    return user;
  }
}
