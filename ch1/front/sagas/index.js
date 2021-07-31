import { all, call } from 'redux-saga/effects';
import user from './user';
import post from './post';

// redux  reducers 처럼 하나로 합쳐서 사용  redux-saga도 redux와 동일
export default function* rootSaga() {
  yield all([
    call(user),
    call(post),
  ]);
}
