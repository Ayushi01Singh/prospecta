import { Injectable,inject } from "@angular/core";
import { StudentService } from "../information/service/student.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CounterActions from './counter.action';
import { catchError, map, of,switchMap, take } from "rxjs";
import { CounterActionTypes } from "./counter.action";

@Injectable()
export class CounterEffect {
    constructor(
        private api:StudentService,
        private action$:Actions
    ){}

    GetStudentDetail$=createEffect(()=>
        this.action$.pipe(
            ofType(CounterActionTypes.GetStudentDetail),
            switchMap(()=>
            this.api.getDetails(null).pipe(
                take(1),
                map((res)=> new CounterActions.GetStudentDetailSuccess(res))
            ))
        )
    )
}