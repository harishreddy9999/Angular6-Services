import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { GetcustomersService } from '../customerservices/getcustomers.service';

import { DeletecustomerService } from '../customerservices/deletecustomer.service';

@Component({
  selector: 'app-viewcustomers',
  templateUrl: './viewcustomers.component.html',
  styleUrls: ['./viewcustomers.component.css']
})
export class ViewcustomersComponent implements OnInit {
  //customers = {}
  constructor(private customersservice: GetcustomersService,  private deleteservice: DeletecustomerService, private toastr: ToastrService, private router: Router) { }
  customers: string;
  customeredit: string;
  ngOnInit() {

    this.customersservice.getCustomers().subscribe(data => {
      this.customers = data.result_object;
      console.log(data.result_object);
    },
      error => console.log('canot load data')
    )
  }
  
  customerDelete(customerId: String) {
    debugger;
    this.deleteservice.deleteCustomers({customerId}).subscribe(
      data => {
        console.log(data);
        alert("suceessfully Deleted");
        //this.toastr.success('suceessfully Deleted', 'Success!', { timeOut: 3000, positionClass: 'toast-bottom-right' });
        console.log('suceessfully Deleted');
        this.customersservice.getCustomers().subscribe(data => {
          this.customers = data.result_object;
          console.log(data.result_object);
        },
          error => console.log('canot load data')
        )
       
        debugger;
      },
      error => {
        console.log('Customer not Deleted ');
        debugger;
      }
    )
  }

  onSelect(customer){
    debugger;
    this.router.navigate(['/edit', customer._id]);
    
    localStorage.setItem('FLdetails', JSON.stringify(customer));
    debugger;
    
  }
}
