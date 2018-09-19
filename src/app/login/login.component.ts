import { Component, OnInit  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from '../customerservices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginservice: LoginService,private toastr: ToastrService) {
   
   }
   welcomemsg: string;
   loginfail: string;

  ngOnInit() {
  }
  login(username: string, password: string){
    debugger;
  
    //this.welcomemsg = '';
    //this.loginfail = '';
    this.loginservice.login({emailId: username, password: password}).subscribe(
      data => {
      //console.log(data);
      ///console.log(data.response_code);
      //console.log(data.message);
      if(data.response_code == "0"){ 
          //this.welcomemsg = "admin login Successfully";
          //debugger;

          this.toastr.success('admin login Successfully','Success!',  {timeOut: 3000, positionClass: 'toast-bottom-right'});
          this.router.navigateByUrl('/success');
          //alert("admin login Successfully")
          //console.log('admin login Successfully');
         
      }else {
        //this.loginfail = data.msg;
        debugger;
         //this.loginfail = "Incorrect Credentialls";
         this.toastr.warning('Incorrect Credentialls', 'Error', {timeOut: 2000, positionClass: 'toast-bottom-right'});
        //alert("username password wrong")
        //console.log('Incorrect Credentialls');
      }
      
      debugger; 
     },
    error => {
       console.log('admin can not login ');
      })
    }
  }
 
