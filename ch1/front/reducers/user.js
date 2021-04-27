const dummyUser = {
  nickname:'테크초',
  Post: [],
  Followings: [],
  Follower:[],
}
export const initialState = {
  isLoggedIn : false,
  user: null
}; 
// 유저의 초기값 정보를 담은 store

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const LOG_IN = 'LOG_IN'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; 
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; 
export const LOG_OUT = 'LOG_OUT';
export const signUpSuccess = {
  type:SIGN_UP_SUCCESS,
};

export const signUpFailure = {
  type:SIGN_UP_FAILURE,
};
export const loginAction = {
  type: LOG_IN,
};

export const logoutAction = {
  type: LOG_OUT,
};

// 리듀서 state와 액션을 받아 다음 state
// switch 문에 default도 꼭 넣어줘야 합니다.
export const reducer = (state= initialState, action) => {
   switch(action.type) {
    case LOG_IN : {
      return {
        ...state,
        isLoggedIn: true,
        user:dummyUser,
      }
    }

    case LOG_OUT : {
      return {
        ...state,
        isLoggedIn: false,
        user:null,
      }
    }

    default: {
      return{
        ...state,
      }
    }
  }
};

export default reducer;