import { TopicoData } from './../models/TopicoData';
import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../models/RequestLogin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  
  public doLogin(requestLogin: RequestLogin):  Observable<RequestLogin []> {


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(requestLogin.email +':' + requestLogin.senha)
      })
    };

    localStorage.setItem('user_email',requestLogin.email)
    localStorage.setItem('user_password',requestLogin.senha)

    return this.httpClient.get<RequestLogin[]>(environment.BASEURL, httpOptions); 
  }

  public email = localStorage.getItem('user_email')
  public senha = localStorage.getItem('user_password')

  public geData(email:string,senha:string):  Observable<TopicoData> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(email +':' + senha)
      })
    };

    return this.httpClient.get<TopicoData>(environment.BASEURL + '/pesquisa', httpOptions); 
  }

  public cadastra(cadastra: RequestLogin):  Observable<RequestLogin> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.httpClient.post<RequestLogin>(environment.BASEURL + '/api/users',cadastra,httpOptions); 
  }


}