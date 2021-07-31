export const initialState = {
  mainPosts: [{
    User: {
      id: 1,
      nickname: '테크초',
    },
    content: '첫 번째 게시물',
    img: 'https://picsum.photos/200',
  }], // 화면에 보일 포스트들
  imagePaths: [], // 미리보기 이미지 경로
  addPostError: false, // 포스트 업로드 실패
  isAddingPost: false, // 포스트 업로드 중
};
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const ADD_COMMENTS_REQUEST = 'ADD_COMMENTS_REQUEST';
export const ADD_COMMENTS_SUCCESS = 'ADD_COMMENTS_SUCCESS';
export const ADD_COMMENTS_FAILURE = 'ADD_COMMENTS_FAILURE';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

const ADD_DUMMY = 'ADD_DUMMY';

export const addPost = {
  type: ADD_POST_REQUEST,
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
    case ADD_POST_REQUEST: {
      return {
        ...state,
      };
    }

    case ADD_POST_SUCCESS: {
      return {
        ...state,
      };
    }

    case ADD_POST_FAILURE: {
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
