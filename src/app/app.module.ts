import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RegisterComponent } from './page/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './page/home/home.component';
import { AngularToastifyModule , ToastService} from 'angular-toastify';
import { NgxCurrencyDirective } from 'ngx-currency';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularToastifyModule,
    NgxCurrencyDirective

  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
