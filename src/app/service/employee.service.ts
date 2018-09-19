import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  
  getData(){
    
    return this.http.get<any>("https://www.w3schools.com/angular/customers.php")
    
  }

}
