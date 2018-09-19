import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { EditcustomerService } from '../customerservices/editcustomer.service';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  public featured

  constructor(private editservice: EditcustomerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.featured = JSON.parse(localStorage.getItem('FLdetails'));
    console.log("featured", this.featured);
    
  }

  editCustomer(Name: string, Email: string, Phone: string, Date: Date, Address: string, id: String){
    debugger;
    this.editservice.editCustomer({name: Name, email: Email, mobile: Phone,address: Address,assigndate: Date,_id: id}).subscribe(
      data => {
        console.log(data);
        alert("suceessfully edited");
        this.router.navigateByUrl('view');
      },
      error => {
        console.log('Customer not Edited ');
        
      }
    )

  }

}
