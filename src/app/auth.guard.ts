import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { AuthService } from 'angular-6-social-login';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router:Router){
        
    }

    canActivate (route: ActivatedRouteSnapshot,
                 state:RouterStateSnapshot):Observable<boolean> {

                    console.log('Auth: ' + this.authService.authState);
                    return undefined;

        }
}