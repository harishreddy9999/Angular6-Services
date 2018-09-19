import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDynamictemplatesService {
  private login_url = "http://adminapi4.0.castusinfo.com/";
  // private config = {
  //   headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'homecare1@3'}
  // };
  
  constructor(private http: HttpClient) { }

  getTemplates(template){
    return this.http.get<any>(this.login_url+'getTemplates?companyId='+template)
  }
  
}


