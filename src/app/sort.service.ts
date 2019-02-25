import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 

@Injectable()
export class SortService {

  constructor(private http:HttpClient) { }

  sortByFollowersAsc(){
    return this.http.get('http://127.0.0.1:8080/sortasc');
  }

  sortByFollowersDesc(){
    return this.http.get('http://127.0.0.1:8080/sortdesc');
  }

  sortByEngagementAsc(){
    return this.http.get('http://127.0.0.1:8080/sortengasc');
  }

  sortByEngagementDesc(){
    return this.http.get('http://127.0.0.1:8080/sortengdesc');
  }

}
