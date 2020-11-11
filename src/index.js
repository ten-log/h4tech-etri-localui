import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import rootReducer, {rootSaga} from './modules';
import {createStore, applyMiddleware} from 'redux';  //리덕스 코어  cs 는 스토어 만드는거 ,applyMiddleware 는 다른 미들웨어추가
import {Provider} from 'react-redux'; // 리액트에서 리덕스 사용하기 쉬우라고 있는 기능
import createSagaMiddleware from 'redux-saga'; //사가 만들기
 
const sagaMiddleware = createSagaMiddleware();  //사가  실행해주기
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); //이렇게 하면 리덕스에서 액션한거 사가로 캐치가능
sagaMiddleware.run(rootSaga);         // 사가관련 함수 다받아서 여기서 적용해주기

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
