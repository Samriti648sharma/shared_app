import { Component, OnInit } from '@angular/core';
import { TeamsService } from "../../services/teams.service"; 
import { Router } from '@angular/router';
//import {ListViewEventData } from 'nativescript-ui-listview';




@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamlist: any=[];
  flag: boolean;

  constructor( private teamService : TeamsService ,private Route:Router) { }
  totalAmount: any;

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamService.getTeams().subscribe(response => {
      //  console.log(response);
      if (response && response.status === 200) {
        this.teamlist=response.data; 
        console.log(this.teamlist); 

        // this.totalAmount = this.teams.reduce((previous, current) => previous + current.amount, this.teams[0].amount);
        // let teamArray = this.teams.map(team => this.fb.group({
        //   name: this.fb.control(team.team_name, [Validators.required]),
        //   amount: this.fb.control(team.amount, [Validators.required, Validators.pattern('[0-9]*')])
        // }));
        // this.teamArray = this.fb.array(teamArray);
        // this.parentFormGroup = this.fb.group({
        //   teamArray: this.teamArray
        // });
        console.log("success");
      } else if (response && response.status === 401) {
        console.log("error");
        // this.logout();
      }

    });
  }

  add(){
    console.log("add");
    this.Route.navigate(['/private/add-team']);
  }

  Select(team: any): void { 
    this.teamService.team_id = team.team_id; 
    this.teamService.team_name = team.team_name; 
    this.teamService.amount = team.amount; 
    this.flag=true; 
    console.log(team.team_name);
    //this.route.navigate(['/update']); 
    } 

    update(){
      console.log("change");
      this.Route.navigate(['/private/edit-team']);
    }


}













