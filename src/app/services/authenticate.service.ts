import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  usersFilters=[] ;

  usersFilters1=[] ;

  constructor(private navController: NavController,private alertController:AlertController) { }

  async getUsers(){
    const options={
      headers:{
        'Content-Type':'application/json',
        Accept:'application/json',
      }
    };
    const response=await fetch(environment.authUserApi.baseUrl,options);

    let users= await response.json();

    return users;
  }

  async signIn(credentials : any){
    
    let users= await this.getUsers()

    this.usersFilters= users.filter(
      (user:any)=>
      user.email===credentials.email && 
      user.password===btoa(credentials.password)
    );

    if(this.usersFilters.length>0){
      return {
        error:false,
        isAuthenticated:true,
        message:'',
        data:this.usersFilters[0],
      }
    }else{
      return {
        error:false,
        isAuthenticated:false,
        message:'Usuario y/o contraseña incorrecta',
        data:{}
      }
    }
  }

  async signUp(userToRegister : any){

    try {
      let users= await this.getUsers()

    this.usersFilters= users.filter(
      (user:any)=>
      user.email===userToRegister.email
    );

    if(this.usersFilters.length>0){
      return {
        error:false,
        userExists:true,
        message:'Correo ya existente',
        data:{},
      }
    }else{

      const options={
        headers:{
          'Content-Type':'application/json',
          Accept:'application/json',
        },
        method:'POST',
        body: JSON.stringify(userToRegister)
      };
      const response=await fetch(environment.authUserApi.baseUrl,options);
  
      let data= await response.json();
  
      console.log(data);


      return {
        error:false,
        userExists:false,
        message:'Usuario y/o contraseña incorrecta',
        data:data
      }
    }

      
    } catch (error) {
      console.log(error);
    }
    
  }

}
