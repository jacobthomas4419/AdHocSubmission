import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ FormsModule,CommonModule ],
  declarations: [ DashboardComponent ],
})
export class DashboardModule { }
