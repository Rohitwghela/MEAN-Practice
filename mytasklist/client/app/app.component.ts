import { Component, Provider } from '@angular/core';
import { LoginService } from "./services/login.service";

@Component({
  selector: 'my-app',
  templateUrl  : './app/loginform.html',
  //template  : '<tasks></tasks>',
  providers : [LoginService]
})
export class AppComponent  { 
  name = 'Ng2'; 
  data = {}; 
  constructor(private loginservice: LoginService){

  }

  formSubmit(){
    if(this.data.username == "admin" && this.data.password == "admin"){
      console.log("Hello Admin!");
    }else{
      console.log("who are you?");
    }
  }
}
