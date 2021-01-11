import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modalplace',
  templateUrl: './modalplace.page.html',
  styleUrls: ['./modalplace.page.scss'],
})
export class ModalplacePage {

  place:any;

  constructor(private modalController:ModalController,private navParams:NavParams) { }


  async ionViewDidEnter(){
     this.place= await this.navParams.data.placeSelected;
  }

  async closeModal(){
    await this.modalController.dismiss(this.place);
  }
}
