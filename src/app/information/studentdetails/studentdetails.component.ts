import { Component, Inject, OnInit, inject } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Store, select } from '@ngrx/store';
import { CounterState } from 'src/app/shared/counter.reducer';
import { Increment } from 'src/app/shared/counter.action';
import { getCount } from 'src/app/shared/counter.selector';
import { Observable, delay } from 'rxjs';
import * as CounterActions from 'src/app/shared/counter.action';
import * as CounterSelector from 'src/app/shared/counter.selector';


@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrl: './studentdetails.component.css',
})


export class StudentdetailsComponent implements OnInit {
  dataSource: any[] = [];

  dispColumns = [
    { key: 'rollNo', value: "RollNumber" },
    { key: 'name', value: "Name" },
    { key: 'fatherName', value: "Fathername" },
    { key: 'motherName', value: "Mothername" },
    { key: 'address', value: "Address" },
    { key: 'phoneNumber', value: "Contact" }
  ]

  displayedColumnsIds: string[] = ['rollNo', 'name', 'fatherName', 'motherName', 'address', 'phoneNumber'];
  details$!:Observable<any>;

  constructor(private studentService: StudentService,
             private store:Store<CounterState>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new CounterActions.GetStudentDetail([]));
    this.store.pipe(select(CounterSelector.selectDetail), delay(100)).subscribe((resp) => {
      this.dataSource = resp;
    })
  }

}
