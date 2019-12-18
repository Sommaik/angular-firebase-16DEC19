import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from './page/simple-form/simple-form.component';
import { AdvFormComponent } from './page/adv-form/adv-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './highlight.directive';
import { TrimCreditCardPipe } from './trim-credit-card.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PhoneLoginComponent } from './page/phone-login/phone-login.component';
import { ProfileComponent } from './page/profile/profile.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { TaskComponent } from './page/task/task.component';
import { TaskFormComponent } from './page/task-form/task-form.component';
import { AdminComponent } from './page/admin/admin.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ProgressbarModule, ModalModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleFormComponent,
    AdvFormComponent,
    HighlightDirective,
    TrimCreditCardPipe,
    PhoneLoginComponent,
    ProfileComponent,
    DashboardComponent,
    TaskComponent,
    TaskFormComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.FIREBASEKEY),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ProgressbarModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
