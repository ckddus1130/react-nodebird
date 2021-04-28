import { all, call, fork, put, takeLatest, takeEvery, take, delay } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

const HELLO_SAGA = 'HELLO_SAGA';

// call 은 함수 동기적 호출
// fork는 함수 비동기적 호출
// put은 액션 dispatch
function loginAPI() {
  //서버에 요청을 보내는 부분
  //return axios.post('./login');
}

//순서를 무조건 지켜야 하는 것은 call , 부가적인 것이나 당장 필요한 것이 아닌 경우는 fork를 주로 쓴다.
function* login(){
  try {
    //yield fork(logger); //logger는 내 기록을 로깅하는 함수 10초 걸림 call로 했다면 동기라서 10초후 작업을 함 비효율적
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
// 사용자가 로그인 버튼을 여러번 클릭해서 LOG_IN 호출이 여러번 생기면 여러번 렌더링 해서 성능에 문제가 생길 수 있는데
// takeLatest를 사용하면 여러 요청중 마지막 요청만 받아들이고 그에 맞는 응답을 해서 form이나 검색같은 곳에서 takeLatest를 사용합니다.
// 클릭하면 클릭하는대로 늘어나야하는  counter의 경우는 takeEvery를 사용해서 비동기 관리를 합니다.
function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

// 여러 요청 중 한번만 실행이 필요한 경우는 takeLatest를 통해서 비동기를 관리해줍니다.
// 로그인 버튼, 회원가입 버튼 등에 주로 사용 // take후 실제 실행되는 부분은 reducer 처럼 분리해서 관리를 해줍니다.

function* hello() {
  yield delay(2000),
  yield put({
    type:'BYE_SAGA',
  })
}

// 실제 수행하는 부분을 분리해주는 이유는 보기 좋고 관리하기 좋아서
function* watchHello() {
  yield takeLatest(HELLO_SAGA, hello);
}

//takeLatest와 takeEvery 예
// while true 방식과 액션을 take하는 것, take 됬을 때 실제 수행이 되는 부분을 명확하게 보이기 위해 사용
// takeEvery는 모든 요청에 대한 응답을 합니다. HELLO_SAGA 액션을 다섯번 take하면 BYE_SAGA도 다섯번 
//
// function* watchHello() {
//   yield takeEvery(HELLO_SAGA, function*(){
//     yield delay(1000),
//     yield put({
//       type:'BYE_SAGA',
//     })
//   })
// }

// 아래의 코드를 위에처럼 
// function* watchHello() {
//     while(true){
//       yield take(HELLO_SAGA);
//       console.log(1);
//       console.log(2);
//       console.log(3);
//       console.log(4);
//     }
// }

// 제너레이터는 함수실행 도중에 중단과 재실행이 가능 
// 주로 무한반복이나 비동기 실행 때 자주 사용
// 함수들을 fork 로 호출하는 이유: 각각 별개의 이벤트리스너 같은 것들이기 에 call 이아닌 fork로 비동기로 작업
export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchHello),
  ]);
};