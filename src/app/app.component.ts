import { Component } from '@angular/core';
import {SortService} from './sort.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  p: number = 1;
  public arrayData;

  constructor(private _sortService : SortService){

  }

  ngOnInit() {
    this.sortByFollowersDesc();
  }

  sortByFollowersDesc(){
    this._sortService.sortByFollowersDesc().subscribe(
            data => { this.arrayData = data},
            err => console.error(err),
            () => console.log('done loading data', this.arrayData)
       );
  }

  sortByFollowersAsc(){
    this._sortService.sortByFollowersAsc().subscribe(
            data => { this.arrayData = data},
            err => console.error(err),
            () => console.log('done loading data', this.arrayData)
       );
  }

  sortByEngagementAsc(){
    this._sortService.sortByEngagementAsc().subscribe(
      data => { this.arrayData = data},
      err => console.error(err),
      () => console.log('done loading data', this.arrayData)
    );
  }

  sortByEngagementDesc(){
    this._sortService.sortByEngagementDesc().subscribe(
      data => { this.arrayData = data},
      err => console.error(err),
      () => console.log('done loading data', this.arrayData)
    );
  }

}
