import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'; 
import { TeamsService } from "../../services/teams.service"; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {


  profileForm1:FormGroup; 
  constructor(private teamService : TeamsService ,private Route:Router,private fb: FormBuilder) { 
    this.profileForm1 = fb.group({ 
      teamName: [teamService.team_name], 
      revenue: [teamService.amount], 
      }) 
  
  }

  ngOnInit() {
    console.log();
  }


updateTeam(team) { 
  //console.log(team); 
  let data = { 
  team_id: this.teamService.team_id, 
  team_name: this.profileForm1.value.teamName, 
  amount:this.profileForm1.value.revenue 
  };
  console.log(this.teamService.team_id); 
  console.log(data); 
  this.teamService.updateTeam(data).subscribe(response => { 
  if (response && response.status == 200) { 
  alert("updated"); 
  console.log(response); 
  this.Route.navigate(['/private/teams']);
  location.reload(); 
  } 
  
  }); 
  } 

}
