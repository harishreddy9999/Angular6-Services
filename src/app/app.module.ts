import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ViewcustomersComponent } from './viewcustomers/viewcustomers.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';
import { GetTemplatesComponent } from './get-templates/get-templates.component';
//services
import { GetcustomersService } from './customerservices/getcustomers.service';
import { AddcustomerService } from './customerservices/addcustomer.service';
import { LoginService } from './customerservices/login.service';
import { DeletecustomerService } from './customerservices/deletecustomer.service';
import { EditcustomerService } from './customerservices/editcustomer.service';
import { GetDynamictemplatesService } from './service/get-dynamictemplates.service';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';


const appRoutes:Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'view',component: ViewcustomersComponent 
    // children: [
    //   {path: 'list', component: ListComponent},
    //   { path: 'contact', component: ContactusComponent},
    // ]
  },
  { path: 'add', component: AddcustomerComponent},
  { path: 'edit/:id', component: EditcustomerComponent},
  { path: 'success', component: SuccessComponent},
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
  ]

@NgModule({
  declarations: [
    AppComponent,
    ViewcustomersComponent,
    AddcustomerComponent,
    LoginComponent,
    HomeComponent,
    SuccessComponent,
    GetTemplatesComponent,
    EditcustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ToastrModule.forRoot(), 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService,EditcustomerService,GetcustomersService,AddcustomerService,DeletecustomerService,GetDynamictemplatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
