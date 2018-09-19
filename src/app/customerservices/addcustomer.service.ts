import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddcustomerService {

  constructor(private http: HttpClient) { }

  addCustomers(user){
    debugger;
    return this.http.post<any>("http://13.126.231.152:8000/addCustomer", user)
  
  }
  debugger;
}
