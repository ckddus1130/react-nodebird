import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

// call 은 함수 동기적 호출
// fork는 함수 비동기적 호출
// put은 액션 dispatch
function loginAPI() {
  //서버에 요청을 보내는 부분
}

function* login(){
  try {
    yield call(loginAPI);
    yield put({  //put은 dispatch 동일
      type:LOG_IN_SUCCESS
    })
  } catch(e){ // loginAPI 실패
    console.error(e);
    yield put({
      type:LOG_IN_FAILURE
    })
  }
}

// takeLatest가 Log_IN 액션이 실행되는지 대기 기다려서 
// dispatch 될 때 login 제너레이터 호출
// saga가 LOG_IN을 기다리다 디스패치되면 login호출 login에서 loginAPI호출(서버요청)
// 성공했다면 다음 줄 실행(try부분)
function* watchLogin() {
  yield takeLatest(LOG_IN, login);
}

// 제너레이터는 함수실행 도중에 중단과 재실행이 가능 
// 주로 무한반복이나 비동기 실행 때 자주 사용
export default function* userSaga() {
  yield all([
    fork(watchLogin),
  ]);
};