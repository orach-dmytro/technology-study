import { createReducer, on } from '@ngrx/store';
import { open, close } from './modal-window.actions';

export const initialState = false;
export const modalWindowReducer = createReducer(
    initialState,
    on(open, (state) => state = true),
    on(close, (state) => state = false)
);