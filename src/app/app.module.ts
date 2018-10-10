import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular-6-social-login";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular2-chartjs';
import { ChartsModule } from 'ng2-charts';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage'
import { environment } from '../environments/environment';

import { SummaryComponent } from './summary/summary.component';
import { SigninComponent } from './signin/signin.component';
import { SearchComponent } from './search/search.component';
import { FirebaseService } from './firebase.service';
import { SkillRadarComponent } from './skill-radar/skill-radar.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("596664547229-2bhtnlbn31j45r5ohem03199v9hue08v.apps.googleusercontent.com")
      }
    ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    SigninComponent,
    SearchComponent,
    SkillRadarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ChartModule,
    ChartsModule
    
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  },
  [AngularFirestore],
  [AngularFireStorage],
  [FirebaseService]],
  bootstrap: [AppComponent]
})
export class AppModule { }
