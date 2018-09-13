import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleDriveService } from './google-drive.service';


@NgModule({
  imports: [ CommonModule ],
  providers : [ GoogleDriveService ]
})
export class DataModule {}
