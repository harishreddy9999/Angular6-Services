import { Component, OnInit } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { AddcustomerService } from '../customerservices/addcustomer.service';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})



export class AddcustomerComponent implements OnInit {
   constructor( private addcustomerService : AddcustomerService, private router: Router) { }

  ngOnInit() {
 
  }
  addCustomer(CustomerName: string, CustomerEmail: string, CustomerPhone: string, CustomerDate: Date, CustomerAddress: string, CustomerRemarks: string, CustomerDesc: string){
    debugger;
    this.addcustomerService.addCustomers({name: CustomerName, email: CustomerEmail, mobile: CustomerPhone,address: CustomerAddress,assigndate: CustomerDate,remarks:[{remark:CustomerRemarks,itemdesc: CustomerDesc}] }).subscribe(
      data => {
      console.log(data);
	   alert("suceessfully created");
	  
      console.log('Customer created Successfully');
    
      this.router.navigateByUrl('/view');
     },
    error => {
       console.log('Customer can not created ');
      })
    }
  }
 



