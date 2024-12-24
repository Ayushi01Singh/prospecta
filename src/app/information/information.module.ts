import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { InformationRoutingModule } from './information-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatListModule} from '@angular/material/list'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import {MatTableModule} from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../shared/counter.reducer';


@NgModule({
  declarations: [
    StudentComponent,
    StudentdetailsComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    //StoreModule.forFeature('counterModel',reducer),
  ],
  providers: []
})
export class InformationModule { }
