import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SimpleFormComponent } from './page/simple-form/simple-form.component';
import { AdvFormComponent } from './page/adv-form/adv-form.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'login',
  component: SimpleFormComponent
}, {
  path: 'register',
  component: AdvFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
