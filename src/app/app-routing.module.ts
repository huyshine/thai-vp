import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';



const routes: Routes = [
  {
    path: '' , redirectTo: '' , pathMatch: 'full',
  },
  { path: '' , component: HomeComponent},
  { path: 're-enter' , component: RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
