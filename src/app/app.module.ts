import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular-6-social-login";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SummaryComponent } from './summary/summary.component';
import { BioComponent } from './bio/bio.component';
import { ExperienceComponent } from './experience/experience.component';
import { AwardsComponent } from './awards/awards.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillRadarComponent } from './skill-radar/skill-radar.component';
import { TechComponent } from './tech/tech.component';
import { ImpactsComponent } from './impacts/impacts.component';
import { RecommentadionsComponent } from './recommentadions/recommentadions.component';
import { SigninComponent } from './signin/signin.component';

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
    SidebarComponent,
    SummaryComponent,
    BioComponent,
    ExperienceComponent,
    AwardsComponent,
    PublicationsComponent,
    ProjectsComponent,
    SkillRadarComponent,
    TechComponent,
    ImpactsComponent,
    RecommentadionsComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
