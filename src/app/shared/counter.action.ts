import { Action, createAction ,props } from '@ngrx/store';

export enum CounterActionTypes {
    Increment= '[Counter Component] Increment',
    Decrement= '[Counter Component] Decrement',
    Reset= '[Counter Component] Reset',
    GetStudentDetail= '[Counter Component]  GetStudentDetail',
    GetStudentDetailSuccess = '[Counter Component]  GetStudentDetailSuccess'
}

export class Increment implements Action {
    readonly type = CounterActionTypes.Increment
}

export class Decrement implements Action {
    readonly type = CounterActionTypes.Decrement
}
export class Reset implements Action {
    readonly type = CounterActionTypes.Reset
}
export class GetStudentDetail implements Action {
    readonly type = CounterActionTypes.GetStudentDetail
    constructor(public detail: any) {}
}

export class GetStudentDetailSuccess implements Action {
    readonly type = CounterActionTypes.GetStudentDetailSuccess
    constructor(public detail: []) {}
}

export type CounterActions = 
    | Increment
    | Decrement
    | Reset
    | GetStudentDetail
    | GetStudentDetailSuccess