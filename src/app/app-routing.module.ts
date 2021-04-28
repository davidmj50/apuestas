import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/front/dashboard/dashboard.component';
import { LoginComponent } from './components/front/login/login.component';

const frontModule = () => import('./components/front/dashboard.module').then(mod => mod.DashboardModule);

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Inicio' },
    children: [
      {
        path: 'front',
        loadChildren: frontModule
      }
    ]
  },
  { 
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
