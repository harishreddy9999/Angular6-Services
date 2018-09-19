import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditcustomerService {

  constructor(private http: HttpClient) { }
  
 
  editCustomer(user){
    
    debugger;
    
    return this.http.put<any>("http://13.126.231.152:8000/updateCustomer/"+user._id, user)
  }
}
