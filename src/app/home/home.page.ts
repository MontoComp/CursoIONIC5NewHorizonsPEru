import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ModalplacePage } from '../modalplace/modalplace.page';
import { OpentripmapService } from '../services/opentripmap.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  textsearch='';

  isskeleton=true;
  placesFound: any[];
  cityFound:any={
  };
  countPlacesFound :number=0
  constructor(private opentripMap: OpentripmapService, private modalController:ModalController) {}

  async ionViewDidEnter(){
    try {
      this.cityFound= await this.opentripMap.getCityFromSearch(environment.openTripMap.defaultCity);
      if(this.cityFound){
        this.placesFound= await this.opentripMap.getPlacesByLAtLon(
          environment.openTripMap.radius,
          this.cityFound.lon,
          this.cityFound.lat,
          environment.openTripMap.rate,
          environment.openTripMap.formatJson,
        );

        this.countPlacesFound = await this.opentripMap.getPlacesByLAtLon(
          environment.openTripMap.radius,
          this.cityFound.lon,
          this.cityFound.lat,
          environment.openTripMap.rate,
          environment.openTripMap.formatCount,
        );

        this.isskeleton=false

        console.log(this.placesFound);
        
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  async showDetailPlace(place:any){
    const placeSelected= await this.opentripMap.getDetailPlaceByXid(place.xid)
    const modal = await this.modalController.create({
      component:ModalplacePage,
      componentProps:{
        placeSelected:placeSelected,
      }
    });
    return await modal.present();
  }

  search(ev:any){
    const val = ev.target.value;
    this.textsearch=val;
    console.log(ev.detail.value)
  }
}

