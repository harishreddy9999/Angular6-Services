import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetcustomersService {

  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get<any>("http://13.126.231.152:8000/getAllCustomers")
  }
  
}
