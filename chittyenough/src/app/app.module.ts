import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyASAc-fxgMYYP2vXnxwKYQjyRwYTxTcWp4",
  authDomain: "chittyenough.firebaseapp.com",
  databaseURL: "https://chittyenough.firebaseio.com",
  projectId: "chittyenough",
  storageBucket: "chittyenough.appspot.com",
  messagingSenderId: "180571597720",
  appId: "1:180571597720:web:8adabb9a03f1efc3e959ed"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
