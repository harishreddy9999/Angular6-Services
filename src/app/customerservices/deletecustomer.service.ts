import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeletecustomerService {

  constructor(private http: HttpClient) { }
  deleteCustomers(Id){
    debugger; 
    return this.http.delete <any>("http://13.126.231.152:8000/deleteCustomer/"+Id.customerId)
    
   //var promise = $http.delete(webServiceUrl+'deleteCustomer/'+customer).then(function(response)
  }
  debugger;
}