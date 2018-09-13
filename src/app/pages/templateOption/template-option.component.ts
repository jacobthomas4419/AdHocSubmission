import { Component } from '@angular/core';
import { TEMPLATE_OPTION } from './template-menu';
import { Router } from '@angular/router';
import { GoogleDriveService } from '../../@core/google-drive.service';

@Component({
    templateUrl : './template-option.component.html'
})

export class TemplateOptionComponent{
    constructor(private router:Router , private googleService : GoogleDriveService){}
    templateOption : Array<any> = TEMPLATE_OPTION;
    selectedTemplate : object = {};

    templateHandler(tempalteOption) : void {
       this.googleService.setTemplateOption(tempalteOption);
       this.router.navigate(['./pages/adhoc-submit']);
    }
    navigateBack () {
        this.router.navigate(['./pages/dashboard'])
    }
}