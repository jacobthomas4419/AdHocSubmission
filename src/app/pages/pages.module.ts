import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { TemplateOptionModule } from './templateOption/template-option.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdhocSubmitComponent } from './adhoc-submit/adhoc-submit.component';

const PAGES_COMPONENTS = [
  PagesComponent,AdhocSubmitComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    DashboardModule,
    TemplateOptionModule,FormsModule,CommonModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
