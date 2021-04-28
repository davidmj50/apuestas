import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BalotoComponent } from './baloto/baloto.component';
import { CvComponent } from './cv/cv.component';


@NgModule({
  declarations: [BalotoComponent, CvComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
