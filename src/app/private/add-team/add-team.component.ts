import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamsService } from '~/app/services/teams.service';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  add_TeamForm: FormGroup; 
  
  constructor(private router : Router, 
    private formBuilder : FormBuilder,private addservice : TeamsService ) { }

  ngOnInit() {
    this.add_TeamForm = this.formBuilder.group({ 
      team:['',Validators.required], 
      revenue:['',Validators.required] 
      
      }); 
      console.log("ayush");
      
  }


  add(data) //Function to check log in credentials 
  { 
    console.log(this.add_TeamForm.get('team').value);
  if(this.add_TeamForm.controls.team.valid && this.add_TeamForm.controls.revenue.valid) 
  { 
    console.log(this.add_TeamForm.get('team').value);
  let data = {team_name: this.add_TeamForm.controls.team.value, amount: this.add_TeamForm.controls.revenue.value}; 
  console.log(data); 
  this.addservice.addTeam(data).subscribe(response => { 
  console.log(response); 
  if(response && response.status==200){ 
    console.log("add-success");
   //require( "nativescript-localstorage" );
  //  localStorage.setItem('accessToken',response.body.access_token); 
  //  console.log(localStorage.getItem('accessToken'));
  //this.Route.navigate(['/private/teams']);
  } 
  }); 
   
  } 
  
  else{ 
  console.log("something went wrong in login service"); 
  } 

  }
}
