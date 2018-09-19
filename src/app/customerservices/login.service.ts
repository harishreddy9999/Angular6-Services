import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(user){
    return this.http.post<any>("http://13.126.231.152:8000/login", user)
  
  }
  debugger;
}
