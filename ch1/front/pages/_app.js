// header나 footer 같이 반복되는 레이아웃을 이곳에서 관리합니다.
// Hooks 성능문제 해결을 위해서도 반복되는 레이아웃을 분리해 줍니다.
// _app.js는 next에서 기본적으로 제공해주는 것
// 이 파일을 index,profile,signup페이지들의 부모역할을 합니다.
// 이 파일에 페이지들의 공통적인 부분을 모아주세요
import React from 'react';
import Head from 'next/head';

import PropTypes from 'prop-types';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import AppLayout from '../components/AppLayout';
// next-redux-wrapper 6으로 하니 getState에러 발생 5버전으로 낮추니 해결
import reducer from '../reducers';
import rootSaga from '../sagas';

// // _document.js
// html, head, body를 담당
// _app.js root
// pages  실제 컴포넌트 담당
// _error.js 에러 발생시

// Component는 next에서 주는 props로 pages 안에 있는 index,profile 등을 준다.
// 레이아웃을 빼주는작업만으로도 form작업시 위에 레이아웃은 렌더링 되지않아 약간의 성능 향상

const NodeBird = ({ Component, store }) => (
  <Provider store={store}>
    <Head>
      <title>NodeBird</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.19/antd.css" />
    </Head>
    <AppLayout>
      <Component />
    </AppLayout>
  </Provider>
);

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
};

const configureStore = (initialState, options) => {
  // 사가 미들웨어 만들기
  const sagaMiddleware = createSagaMiddleware();

  // 미들웨어 : 어떠한 작업 중간에 껴서 기능을 추가하거나 변조시키는.. 비동기 state를 처리하는 redux-saga redux-thunk mobx 등을 아래
  // middleware에 추가해서 사용합니다.
  const middlewares = [sagaMiddleware];

  // 실제서비스 때는 redux-dev-tools를 안보이게 실제 파일구조가 노출되서는 안된다.
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      !options.isServer && window.__REDUX_DEVTOOLS__EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
  // next에서 redux를 넣는 방법은 아래와 같이 작성해야합니다. highordercomponent는 기능을 확장하는 것
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

// withRedux props로 store를 넣어주는 역할
export default withRedux(configureStore)(NodeBird);
