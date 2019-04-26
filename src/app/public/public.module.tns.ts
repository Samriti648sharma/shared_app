import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './login/login.component';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    PublicRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PublicModule { 
  
}
