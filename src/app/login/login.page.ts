import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import {Storage} from '@ionic/storage'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  passwordTypeInput  =  'password';
  // Variable para cambiar dinamicamente el tipo de Input que por defecto sera 'password'
  iconpassword  =  'eye-off';

  responseAuthenticateUSer:any={

  };

  messageAuthtenticate=''

  loginForm:FormGroup;

  validationMessages={
    email:[
      {
        type:'required',
        message:'El email es requerido'
      },
      {
        type:'pattern',
        message:'El email no es valido'
      },
    ],
    password:[
      {
        type:'required',
        message:'El password es requerido'
      },
      {
        type:'minlength',
        message:'El password debe tener al menos 6 caracteres'
      },
    ]
  }

  constructor(private router:Router,private formBuilder:FormBuilder, private authenticated:AuthenticateService, private navController: NavController,private storage:Storage) {
    this.loginForm=this.formBuilder.group({
      email:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.+]+$"),
      ])),
      password:new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ]))
    });
  }

  ngOnInit() {
  }

  myvisibility(){
    this.passwordTypeInput  =  this.passwordTypeInput  ===  'text'  ?  'password' : 'text';
    this.iconpassword  =  this.iconpassword  ===  'eye-off'  ?  'eye' : 'eye-off';
  }

  async loginUser(credentials : any){
    try {
      console.log(btoa(credentials.password))
      this.responseAuthenticateUSer=await this.authenticated.signIn(credentials);
      console.log(this.responseAuthenticateUSer);
      if(this.responseAuthenticateUSer.isAuthenticated){
        this.storage.set('user',this.responseAuthenticateUSer.data);
        this.storage.set('isAuthenticated',true);
        this.navController.navigateForward('/menu/home');
      }else{
        this.messageAuthtenticate=this.responseAuthenticateUSer.message;
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  goToRegister(){
    this.navController.navigateForward('/register')
  }

}
