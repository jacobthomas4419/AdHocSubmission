import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleDriveService } from '../../@core/google-drive.service';
import { AngularFireDatabase} from "angularfire2/database";

@Component({
    selector : '',
    templateUrl : './adhoc-submit.component.html',
    providers: [AngularFireDatabase]
})

export class AdhocSubmitComponent implements OnInit{
    templateOption : any;
    items: any = [];
    adhoc : any = {}; 
    dashboardData : {};
    dataSaved : boolean = true;
    "toplineTakeAway" = false;
    "deeperDrive" =false;
    "webpageURL" = false;
    "dayPart" = false;
    'course' = false;
    'firstQuestion' = false;
    'secondQuestion' = false; 
    'thirdQuestion' = false;
    'fourthQuestion' = false;
    selectUndefinedOptionValue:any;
    dayPartValues = [
      {"value":"Morning","label" : "Morning"},
      {"value":"Mid-Day","label" : "Mid-Day"},
      {"value":"Afternoon","label" : "Afternoon"},
      {"value":"Evening","label" : "Evening"}
    ];
    courseValues : Array<any>
    constructor(private router: Router,private googleService : GoogleDriveService
        , private db: AngularFireDatabase
    ){
        this.items = db.list('/items');
        this.courseValues =this.googleService.courseValues;
    }
    ngOnInit(){
        this.templateOption = this.googleService.getTemplateOption();
        this.dashboardData = this.googleService.getDashBoardData();
        this.setTempaltePattern();
    }
    setTempaltePattern (){
        let templateOption = this.templateOption.templateOptions;
        if(templateOption){
            for(var i=0; i<templateOption.length; i++){
                this[templateOption[i].label]=!templateOption[i].value;
            }
        }else{
            this.router.navigate(['pages/dashboard'])
        }
    }
    submitHandler (){
        let courseValues = this.googleService.courseValues;
        this.adhoc.course = [];
        for(let objVar in this.dashboardData){
            if(objVar !== "course")
                this.adhoc[objVar] = this.dashboardData[objVar];
        }
        for(let i=0 ; i <courseValues.length ; i++){
            this.adhoc.course.push({
                course : courseValues[i].label , selected : courseValues[i].selected
            })
        }
        this.adhoc["templateName"] = this.templateOption.caption;
        this.items.push({content: this.adhoc});
        this.dataSaved = false;
    }
    dashboardHandler(){
        this.router.navigate(['pages/dashboard']);
    }
}