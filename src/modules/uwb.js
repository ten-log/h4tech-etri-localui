import {createAction, handleActions} from 'redux-actions';
import {takeLatest, call, put } from 'redux-saga/effects';
import * as uwbAPI from '../lib/api/uwb';
import createRequestSaga ,{ createRequestActionTypes } from '../lib/createRequestSaga';

const [LOCATION_DATA, LOCATION_DATA_SUCCESS,LOCATION_DATA_FAILURE]= createRequestActionTypes('uwb/LOCATION_DATA');
const LOCATION_DATA_ARR = 'uwb/LOCATION_DATA_ARR';

export const locationData = createAction(LOCATION_DATA);

//사가 생성 createRequestSaga(LOCATION_DATA , uwbAPI.GetUwbData);
let sumRes=[];
let sumRes2=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
// 0 부터 21개까지의 22개 배열 하지만 0번째는 안씀.
function * locationDataSaga(action){
  try{
    let res = yield call(uwbAPI.GetUwbData, action.payload);
    let newData = JSON.parse(`{${res.data.result}}`).data;
    sumRes = sumRes.concat(newData);

  //  console.log(newData);
    newData&&newData.map((data,index)=>{
      sumRes2[data.id] = sumRes2[data.id].concat(data);
    });

    sumRes2&&sumRes2.map((dataArr,index)=>{
       dataArr.map((data, index)=>{
         //console.log(data);
       })
    });

    yield put({
      type:LOCATION_DATA_ARR,
      payload:sumRes2,
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
