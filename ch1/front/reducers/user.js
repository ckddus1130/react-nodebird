const dummyUser = {
  nickname: '테크초',
  Post: [],
  Followings: [],
  Follower: [],
};

export const initialState = {
  isLoggedIn: false, // 로그인여부
  isLoggingOut: false, // 로그아웃 시도중
  isLoggingIn: false, // 로그인 시도중
  loginErrorReason: null, // 로그인 실패 사유
  signedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도 중
  signUpErrorReason: null, // 회원가입 실패 사유
  me: null, // 내 정보
  followingList: [], // 팔로잉 리스트
  followerList: [], // 팔로워 리스트
  userInfo: null, // 남의 정보

};

// 유저의 초기값 정보를 담은 store
// 공교롭게도 요청,성공,실패가 글자수가 같아서 아래와 같이 이름을 지어주면 가독성이 좋다.
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'; // 유저 가져오는 액션
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST'; // 팔로잉 팔로워 목록 불러오기 액션
export const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
export const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST'; // 다른사람 팔로우 하는 액션
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST'; // 다른사람 언팔로우 하는 액션
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST'; // 팔로워 취소(제거)하는 액션
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME'; // 리듀서의 단점 때문에 어쩔 수 없이 만들어낸 액션 중요!
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
export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutRequestAction = {
  type: LOG_OUT_REQUEST,
};

export const signRequestUp = (data) => ({
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
        isLoggingIn: true,
        loginErrorReason: '',
      };
    }

    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: dummyUser,
      };
    }

    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        loginErrorReason: action.error,
        me: null,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    }

    case SIGN_UP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        signedUp: false,
        signUpErrorReason: '',
      };
    }

    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
        signedUp: true,
      };
    }

    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isSigningUp: false,
        signedUp: false,
        signUpErrorReason: action.data,
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
