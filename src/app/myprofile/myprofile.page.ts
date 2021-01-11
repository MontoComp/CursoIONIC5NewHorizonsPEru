import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser' ;
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage {

  myuser:any={};

  photo:SafeResourceUrl;
  urlAvatar=environment.urlAvatarDefaultImage;

  constructor(private sanitizer:DomSanitizer,private storage:Storage) { }

  async ionViewDidEnter(){
    this.myuser=await this.storage.get('user')
    console.log(this.myuser)
  }

  async takePhoto(){
    const img = await Plugins.Camera.getPhoto({
      quality:100,
      allowEditing:false,
      resultType:CameraResultType.DataUrl,
      source:CameraSource.Camera,
    })

    if(img){
      this.photo=this.sanitizer.bypassSecurityTrustResourceUrl(img.dataUrl);

    }

    console.log(img);
  }



}
