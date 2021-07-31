import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS } from '../reducers/post';

function addPostAPI() {

}
function* addPost() {
  try {
    // yield call(addPostAPI);
    yield delay(2000);
    yield put({ // 짹짹 버튼을 눌러도 아래의 액션이 안나오고 별도의 에러도 없어서 어딘지 몰랐는데 put 앞에 yield를 빼서 오류가 발생
      type: ADD_POST_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: ADD_POST_FAILURE,
      error: e,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
  ]);
}
