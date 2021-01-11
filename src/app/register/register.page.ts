import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  passwordTypeInput  =  'password';
  // Variable para cambiar dinamicamente el tipo de Input que por defecto sera 'password'
  iconpassword  =  'eye-off';

  registerForm:FormGroup;

  responseAuthenticateUSer:any={

  };

  responseSingUp:any;

  validationMessages={
    firstName:[
      {
        type:'required',
        message:'Los nombres son requeridos'
      },
    ],
    lastName:[
      {
        type:'required',
        message:'Los apellidos son requeridos'
      },
    ],
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
  constructor(private formBuilder:FormBuilder, private navController: NavController,private alertController:AlertController,private authenticated:AuthenticateService) {
    this.registerForm=this.formBuilder.group({
      firstName:new FormControl('',Validators.compose([
        Validators.required,
      ])),
      lastName:new FormControl('',Validators.compose([
        Validators.required,
      ])),
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

  async registerUser(userToRegister : any){

    

    try {
      console.log(btoa(userToRegister.password))
      userToRegister.password=btoa(userToRegister.password)

      this.responseSingUp = await this.authenticated.signUp(userToRegister);

      if(this.responseSingUp.userExists){
        await this.myalertController("Error!","Ese correo ya existe",false)
      }else{
        await this.myalertController("¡Felicidades!","Usuario añadido correctamente",true)
      }
      

      
      
    } catch (error) {
      console.log(error);
      await this.myalertController("¡Error!","Ocurrio un error intente nuevamente",false)
    }

    
    
    
  }

  goToLogin(){
    this.navController.navigateRoot('/login')
  }

  myvisibility(){
    this.passwordTypeInput  =  this.passwordTypeInput  ===  'text'  ?  'password' : 'text';
    this.iconpassword  =  this.iconpassword  ===  'eye-off'  ?  'eye' : 'eye-off';
  }

  async myalertController(header:any,message:any,iscase:Boolean){
    const alertElement = await this.alertController.create({
      header:header,
      message:message,
      buttons:[
        {
          text:"Ok",
          handler:()=>{
            if(iscase){
              this.navController.navigateRoot('/login')
            }else{
              this.navController.navigateRoot('/register')
            }
            
          }
        }
      ]
    })

    await alertElement.present()
  }

}
