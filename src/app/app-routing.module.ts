import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SimpleFormComponent } from './page/simple-form/simple-form.component';
import { AdvFormComponent } from './page/adv-form/adv-form.component';
import { PhoneLoginComponent } from './page/phone-login/phone-login.component';
import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProfileComponent } from './page/profile/profile.component';
import { TaskComponent } from './page/task/task.component';
import { TaskFormComponent } from './page/task-form/task-form.component';
import { AdminComponent } from './page/admin/admin.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'login',
  component: SimpleFormComponent
}, {
  path: 'register',
  component: AdvFormComponent
}, {
  path: 'support',
  loadChildren: './support/support.module#SupportModule'
}, {
  path: 'phone-login',
  component: PhoneLoginComponent
}, {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'task', component: TaskComponent},
      { path: 'task-form', component: TaskFormComponent },
      { path: 'task-form/:id', component: TaskFormComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
