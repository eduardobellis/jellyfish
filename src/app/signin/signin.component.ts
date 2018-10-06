import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor(private socialAuthService: AuthService, private router:Router) { }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }     
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        if (userData.token && userData.email.match("^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(ciandt)\.com$")){
          this.router.navigateByUrl('/search');
        }else{
          console.log("User not in domain");
        }  
      }
    );
  }

  ngOnInit() {
  }

}
