export const initialState = {
  mainPosts: [{
    User: {
      id: 1,
      nickname: '테크초',
    },
    content: '첫 번째 게시물',
    img: 'https://picsum.photos/200',
  }],
  imagePaths: [],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

export const addPost = {
  type: ADD_POST,
};

export const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: 'HELLO',
    userId: 1,
    User: {
      nickname: '테크초',
    },
  },
};

// ...state 스트레드 문법을 사용하는 이유는 리액트가 예전state 지금state를 비교해서
// 변화가 있어야 렌더링을 하기 때문인데 객체는 항상 참조가 같아서 새로운 객체를 만들어줘야합니다. 그래서
// 스프레드 문법으로 새로 만들면 리액트가 변화를 인지해서 렌더링이 됩니다.
// 불변성
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
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
