import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  contacts;
 //---------get method-----//
  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    
    this.http.get('https://address-book-demo.herokuapp.com/api/contacts').subscribe(data => {
      debugger;
      this.contacts=data;
      console.log(data);

    });

  }
 }

