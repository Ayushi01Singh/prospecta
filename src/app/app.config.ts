import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { reducer } from './shared/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffect } from './shared/counter.effect';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),provideHttpClient(),provideStore(), provideState({name:'counterModel',reducer: reducer}),provideEffects(CounterEffect)],
};
