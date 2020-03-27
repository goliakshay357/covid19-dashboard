import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

// Forms Related Modules...
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// All Services Here...
import { AuthService } from './services/auth.service'
import {DataService} from './services/data/data.service'

// Firebase Modules...
import { environment } from './../environments/environment';

// Enable if u want firebase ///
// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';

// Angular Material Modules..
import { MatSelectModule, MatFormFieldModule, MatInputModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Main1Component } from './components/main1/main1.component';
import { Main2Component } from './components/main2/main2.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Main1Component,
    Main2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [AuthService, MatSelectModule, MatInputModule, MatFormFieldModule,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
