const dummyUser = {
  nickname: '테크초',
  Post: [],
  Followings: [],
  Follower: [],
};

export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

// 유저의 초기값 정보를 담은 store
// 공교롭게도 요청,성공,실패가 글자수가 같아서 아래와 같이 이름을 지어주면 가독성이 좋다.
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const INCREMENT_NUMBER = 'INCREMENT_NUMBER'; // 동기요청은 기다리는 것이 없고 바로 실행이 되서 액션이 하나
export const signUpAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

export const signUpSuccess = {
  type: SIGN_UP_SUCCESS,
};

export const signUpFailure = {
  type: SIGN_UP_FAILURE,
};
// 함수가 되었다.
export const loginAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutAction = {
  type: LOG_OUT_REQUEST,
};

export const signUp = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

// 리듀서 state와 액션을 받아 다음 state
// switch 문에 default도 꼭 넣어줘야 합니다.
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
        loginData: action.data,
        isLoading: true,
      };
    }

    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
        isLoading: false,
      };
    }

    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }

    case SIGN_UP_REQUEST: {
      return {
        ...state,
        signUpData: action.data,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
