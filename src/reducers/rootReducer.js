import { combineReducers } from 'redux';

import { authReducer } from './authReducer';

// Cómo lucirá todo el store
export const rootReducer = combineReducers({
    auth: authReducer
})