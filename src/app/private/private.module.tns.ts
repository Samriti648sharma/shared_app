import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { PrivateRoutingModule } from './private-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TeamsComponent } from './teams/teams.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';


@NgModule({
  declarations: [TeamsComponent, AddTeamComponent, EditTeamComponent],
  imports: [
    PrivateRoutingModule,
    NativeScriptCommonModule,
    NativeScriptUIListViewModule
    // ListViewEventData,
    
    // RadListViewComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PrivateModule { }
