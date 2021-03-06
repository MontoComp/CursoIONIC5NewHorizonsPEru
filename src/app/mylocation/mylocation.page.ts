import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core'
import { environment } from 'src/environments/environment';

const { Geolocation } = Plugins
@Component({
  selector: 'app-mylocation',
  templateUrl: './mylocation.page.html',
  styleUrls: ['./mylocation.page.scss'],
})
export class MylocationPage {

  currentCenter: any;
  defaultZoom=environment.gmapsApi.defaultZoom;

  constructor() { }

  /*async ngOnInit() {
    await this.getCurrentPosition();
  }*/

  async ionViewDidEnter(){
    await this.getCurrentPosition();
  }

  async getCurrentPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentCenter= {
      lat:coordinates.coords.latitude,
      lng:coordinates.coords.longitude,
    }
  }

}
