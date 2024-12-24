import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { StudentComponent } from "./student/student.component";
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";

const routes :Routes=[
  //{path: '',redirectTo:'student', pathMatch : 'full'},
  {path: 'student', component: StudentComponent},
  {path:'studentdetails', component: StudentdetailsComponent}
]

@NgModule({
    imports: [CommonModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class InformationRoutingModule { }

