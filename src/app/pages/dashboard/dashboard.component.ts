import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleDriveService } from '../../@core/google-drive.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls : ['./dashboard.component.css'],
})
export class DashboardComponent{
  dashboard : any = {};
  selectUndefinedOptionValue:any; 
  items : any;
  dayPartValues = [
    {"value":"Morning","label" : "Morning"},
    {"value":"Mid-Day","label" : "Mid-Day"},
    {"value":"Afternoon","label" : "Afternoon"},
    {"value":"Evening","label" : "Evening"}
  ];
  constructor( private router : Router, private googleService : GoogleDriveService
    , private db: AngularFireDatabase
  ){
       db.object('/courseDetails').valueChanges().subscribe(item =>
        this.items =  item
      );
  }
  navigateTo() : void {
    this.googleService.courseValues = this.items;
    this.googleService.courseValues !== null ? this.googleService.courseValues[Number(this.dashboard.course)-1].selected = true : 0;
    this.googleService.setDashBoardData(this.dashboard);
    this.router.navigate(['pages/templateSelection'])
  }
}