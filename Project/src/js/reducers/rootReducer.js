import { combineReducers } from 'redux';
import { catalogReducer } from './catalogReducer'
import { adminReducer } from './adminReducer';
export const rootReducer = combineReducers({
    catalog: catalogReducer,
    admin: adminReducer
});