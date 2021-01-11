import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpentripmapService {
  endpointSearchCity= 'geoname?name=';
  endpointGetLatLon= 'radius?';
  endpointDetailPlaceByXid= 'xid/';
  constructor() { }

  async getCityFromSearch(city:string){
    const url = environment.openTripMap.baseUrl+this.endpointSearchCity+city+'&'+environment.openTripMap.apikey;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getPlacesByLAtLon(radius:string,lon:string,lat:string,rate:string,format:string){
    const url = environment.openTripMap.baseUrl+this.endpointGetLatLon+'radius='+radius+'&lon='+lon+'&lat='+lat+'&rate='+rate+'&format='+format+'&'+environment.openTripMap.apikey;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getDetailPlaceByXid(xid:string){
    const url = environment.openTripMap.baseUrl+this.endpointDetailPlaceByXid+xid+'?'+environment.openTripMap.apikey;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

}
