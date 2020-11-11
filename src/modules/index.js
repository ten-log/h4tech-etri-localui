import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import uwb, {uwbSaga} from './uwb';
import loading from './loading';
const rootReducer = combineReducers({
    uwb, loading,
});

export function* rootSaga(){     // 여기서 각 모듈을의 비동기 함수를 통합하고 index에서 middleware로서 실행
  yield all([  uwbSaga(),  ]);
}

export default rootReducer;
