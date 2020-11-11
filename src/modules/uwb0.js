import {createAction, handleActions} from 'redux-actions';
import {takeLatest, call, put } from 'redux-saga/effects';
import * as uwbAPI from '../lib/api/uwb';
import createRequestSaga ,{ createRequestActionTypes } from '../lib/createRequestSaga';

const [LOCATION_DATA, LOCATION_DATA_SUCCESS,LOCATION_DATA_FAILURE]= createRequestActionTypes('uwb/LOCATION_DATA');
const LOCATION_DATA_ARR = 'uwb/LOCATION_DATA_ARR';

export const locationData = createAction(LOCATION_DATA);

//사가 생성 createRequestSaga(LOCATION_DATA , uwbAPI.GetUwbData);
function * locationDataSaga(action){
  try{
    let res = yield call(uwbAPI.GetUwbData, action.payload);
    let newData = JSON.parse(`{${res.data.result}}`).data;

    let sumRes = initialState.uwbData.concat(newData);

    yield put({
      type:LOCATION_DATA_ARR,
      payload:sumRes,
    });
    yield put({
      type:LOCATION_DATA_SUCCESS,
      payload:newData,
    });
  }catch(e){
    console.log('LOCATION_DATA error catch : ');
    console.log(e);
  }
};
export function* uwbSaga(){
  yield takeLatest(LOCATION_DATA, locationDataSaga);
}

const initialState={
    uwbGet:null,
    uwbData:[],

    uwbGetError:null,
}

const uwb = handleActions(
  {
    [LOCATION_DATA_SUCCESS]:(state, {payload:uwbGet})=>({
        ...state,
          uwbGetError:null,
          uwbGet,
      }),
    [LOCATION_DATA_FAILURE]:(state, {payload:error})=>({
        ...state,
          uwbGet:null,
          uwbGetError:error,
      }),
    [LOCATION_DATA_ARR]:(state, {payload:sumRes})=>({
          ...state,
            uwbData:sumRes,
      }),
  },
  initialState,
);

export default uwb;
