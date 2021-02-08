import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginboxComponent } from './loginbox/loginbox.component';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { HomeComponent as HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path:'', component: HomeComponent},
  { path:'loginbox', component: LoginboxComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginboxComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
