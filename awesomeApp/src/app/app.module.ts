import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';

const config = {
  apiKey: "AIzaSyBDZMGj8fx72yJCyEeAQQEEOlE9apBOZqg",
  authDomain: "chittyhyder.firebaseapp.com",
  databaseURL: "https://chittyhyder.firebaseio.com",
  projectId: "chittyhyder",
  storageBucket: "chittyhyder.appspot.com",
  messagingSenderId: "148645359096",
  appId: "1:148645359096:web:1061868d6e61143500fa0d"
}

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  declarations: [AppComponent, UserProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}