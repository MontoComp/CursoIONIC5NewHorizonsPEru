import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
 
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOptions={
    initialSlide:0,
    slidesPerView:1,
    centeredSlides:true,
    speed:400,
  }; 

  slides = [
    {
      logoUrl:'assets/images/logo-h.png',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum temporibus nostrum sit totam reiciendis, quia libero nisi nihil magni nemo laborum officiis iure in sed aut amet excepturi obcaecati!',
      iconname: 'camera'
    },
    {
      logoUrl:'assets/images/logo-h.png',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum temporibus nostrum sit totam reiciendis, quia libero nisi nihil magni nemo laborum officiis iure in sed aut amet excepturi obcaecati!',
      iconname: 'airplane'
    },
    {
      logoUrl:'assets/images/logo-h.png',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum temporibus nostrum sit totam reiciendis, quia libero nisi nihil magni nemo laborum officiis iure in sed aut amet excepturi obcaecati!',
      iconname: 'restaurant'
    }
  ]

  constructor(private router:Router,private storage: Storage) { }

  ngOnInit() {
  }

  myclose(){
    this.storage.set('isShowed',true);
    this.router.navigate(['/menu/home'])
  }

}
