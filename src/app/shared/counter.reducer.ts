import { createReducer, on } from '@ngrx/store';
import { CounterActionTypes, CounterActions } from './counter.action';


export interface CounterState {
    count : any
    detail: any

}
export const initialState : CounterState = {
    count : 0,
    detail:[]
};

export function reducer(state= initialState, action : CounterActions): CounterState {
    switch(action.type) {
        case CounterActionTypes.Increment : 
            return {
                ...state,
                count: state.count+1
            };
        case CounterActionTypes.Decrement:
            return{
                ...state,
                count:state.count-1
            };
        case CounterActionTypes.Reset:
            return{
                ...state,
                count:0
            };
        case CounterActionTypes.GetStudentDetail:
            return{
                ...state,
                detail : action.detail
            }
        case CounterActionTypes.GetStudentDetailSuccess:
            return {
                ...state,
                detail : action.detail
            }
    }
}