import { handleAction, handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

// with handleAction
// const customers = handleAction(FETCH_CUSTOMERS, (state) => state);

// with handleActions
export const customers = handleActions(
  { //1 param: objto donde se mapean las pure actions del reducer
    [FETCH_CUSTOMERS]: (state) => state
  },
  {}  //2 param: default value
);
