import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import{ FormsModule} from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ListComponent } from './list/list.component';

//import { RoutingAreaComponent } from './routing-area/routing-area.component';


const appRoutes:Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'aboutus',component: AboutusComponent, 
    children: [
      {path: 'list', component: ListComponent},
      { path: 'contact', component: ContactusComponent},
    ]
},
  { path: 'contactus', component: ContactusComponent},
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
  ]
 
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    NavComponent,
    ContactusComponent,
    ListComponent,
    

  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
