import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { TeamsService } from "../../services/teams.service"; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  
loginForm: FormGroup; 

constructor(
private formBuilder : FormBuilder, 
private loginservice : TeamsService,private Route:Router,) { } 

ngOnInit() { 
this.loginForm = this.formBuilder.group({ 
lgnEmail:['saral@jungleworks.com',[Validators.required,Validators.email]], 
lgnPassword:['123456',Validators.required] 

}); 
console.log("ayush");
} 

// var localStorage = require( "nativescript-localstorage" );
//get controls() { return this.loginForm.controls; } //getter function 

login(data) //Function to check log in credentials 
{ 
  console.log(this.loginForm.get('lgnEmail').value);
if(this.loginForm.controls.lgnEmail.valid && this.loginForm.controls.lgnPassword.valid) 
{ 
let data = {email: this.loginForm.controls.lgnEmail.value, password: this.loginForm.controls.lgnPassword.value}; 
console.log(data); 
this.loginservice.login(data).subscribe(response => { 
console.log(response); 
if(response && response.status==200){ 
// require( "nativescript-localstorage" );
 localStorage.setItem('accessToken',response.body.access_token); 
 console.log(localStorage.getItem('accessToken'));
this.Route.navigate(['/private/teams']);
} 
}); 
 
} 

else{ 
console.log("something went wrong in login service"); 
} 


} 


}

// this.Route.navigate(['/private/teams']);