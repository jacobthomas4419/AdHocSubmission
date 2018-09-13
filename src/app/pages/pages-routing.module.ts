import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateOptionComponent } from './templateOption/template-option.component';
import { AdhocSubmitComponent } from './adhoc-submit/adhoc-submit.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },{
    path: 'templateSelection',
    component: TemplateOptionComponent,
  }, {
    path: 'adhoc-submit',
    component: AdhocSubmitComponent,
  },{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
