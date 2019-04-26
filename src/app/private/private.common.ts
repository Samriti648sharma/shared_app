import { Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {path: 'teams', component: TeamsComponent },
  {path: 'add-team', component: AddTeamComponent},
  {path: 'edit-team', component: EditTeamComponent }
];
