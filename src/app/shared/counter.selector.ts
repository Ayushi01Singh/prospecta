import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterModelState } from "./counter.model";

export const MODEL_NAME = 'counterModel';

const getCounterModelState = createFeatureSelector<CounterModelState>(MODEL_NAME);
const getCounterFeatureState = createSelector(getCounterModelState, (state: any) => state);
export const getCount = createSelector(getCounterFeatureState, (state) => state.count);
export const selectDetail= createSelector(getCounterFeatureState, (state) => state.detail);
