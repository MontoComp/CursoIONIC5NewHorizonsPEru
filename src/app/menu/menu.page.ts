import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private navController :NavController,private storage:Storage,private menuController:MenuController) { }

  ngOnInit() {
  }

  logout(){
    this.storage.remove('isAuthenticated')
    this.storage.remove('user')
    this.navController.navigateRoot('/login')
  }

  closeMenu(){
    this.menuController.close()
  }

  goToHome(){
    this.navController.navigateForward('menu/home')
    this.menuController.close()
  }
  goToMyProfile(){
    this.navController.navigateForward('menu/myprofile')
    this.menuController.close()
  }
  goToMyLocation(){
    this.navController.navigateForward('menu/mylocation')
    this.menuController.close()
  }
}
