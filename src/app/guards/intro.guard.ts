import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {

  constructor(private storage :Storage,private router:Router){

  }

  async canActivate(){
    const isIntroShowed = await this.storage.get('isShowed')

    if(isIntroShowed){
      return isIntroShowed;
    }
    this.router.navigate(['/intro']);
  }
  
  /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const isIntroShowed=false
    this.storage.g
    return true;
  } */
  
}
