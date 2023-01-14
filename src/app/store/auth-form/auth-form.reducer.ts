import { createReducer, on } from '@ngrx/store';
import { submit } from './auth-form.actions';

export const initialState = false;
export const authStateReducer = createReducer(
  initialState,
  on(submit, (state) => (state = true))
);
