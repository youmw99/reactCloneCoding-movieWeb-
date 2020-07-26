import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//render는 1개의 컴포넌트만을 rendering 해야 한다. error 발생
//import Potato from "./Potato"

//component : HTML을 반환하는 함수
//jsx : angular, vue에서는 사용하지 않는 javascript 개념(?)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
