import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalotoComponent } from './baloto/baloto.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  { path: 'cv', component: CvComponent},
  { path: 'baloto', component: BalotoComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
