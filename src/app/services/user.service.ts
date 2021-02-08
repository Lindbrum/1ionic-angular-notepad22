import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Note} from '../interfaces/note';


import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import {Urls} from '../constants/urls';
import {not} from 'rxjs/internal-compatibility';
import {Storage} from '@ionic/storage';
import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
u: any;
p: any;
  res: string;
constructor(private storage: Storage, private http: HttpClient) {
  }



  gettoken( p, s): any{
    const user = p;
    const pass = s;
    // tslint:disable-next-line:prefer-const



    this.http.post('http://localhost:8080/user/loginUser', {
      username: user,
      password: pass
    }).subscribe (response => this.res = JSON.stringify(response), error1 => this.res = JSON.stringify(error1));



    return this.res; }
}
