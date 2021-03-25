export const initialState = {
  isLoggedIn : false,
  user: null,
}; // 유저의 초기값 정보를 담은 store

const LOG_IN = 'LOG_IN'; // 액션의 이름
const LOG_OUT = 'LOG_OUT';

export const loginAction = {
  type: LOG_IN,
  data: {
    nickname: '테크초',
  }
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
        user:action.data,
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