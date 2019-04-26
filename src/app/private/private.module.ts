import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { TeamsComponent } from './teams/teams.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';


@NgModule({
  declarations: [TeamsComponent, AddTeamComponent, EditTeamComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule, ReactiveFormsModule,
   // NativeScriptUIListViewModule
  ]
})
export class PrivateModule { }
