import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-component/login-component.component';
import { FooterComponent } from './footer-compoenent/footer-compoenent.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms'; 
import {ButtonModule} from 'primeng/button';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader-component/loader-component.component';
import { DetailsComponent } from './details/details.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    DashboardsComponent,
    LoaderComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule, 
    ButtonModule, 
    ToastModule,  
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
