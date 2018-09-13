import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GoogleDriveService {
  selectedTemplate : object = {};
  dashboardData : {};
  courseValues : Array<any>;
  setTemplateOption ( tempalteOption : object ) : void{
    this.selectedTemplate = tempalteOption;
  }
  getTemplateOption () : object{
    return this.selectedTemplate;
  }
  setDashBoardData  ( tempalteData : object ) : void{
    this.dashboardData = tempalteData;
  }
  getDashBoardData () : object{
    return this.dashboardData;
  }
}