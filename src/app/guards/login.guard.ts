import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { from, Observable } from 'rxjs';
import {Storage} from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private navController:NavController,private storage:Storage){

  }
  async canActivate() {
    const isAuth= await this.storage.get('isAuthenticated');
    if(!isAuth){
      return true;
    }else{
      this.navController.navigateRoot('/menu/home');  
    }
  }
  
}
