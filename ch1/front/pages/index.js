import React, {useEffect} from 'react';
import {Form, Input,Button, Card, Icon, Avatar} from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction, logoutAction} from '../reducers/user';
const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts:[{
    User:{
      id:1,
      nickname:'테크초',
    },
    content:'첫 번째 게시물',
    img:'https://picsum.photos/200',
  },
],
}
// 액션을 디스패치하는 방법 디스패치만 했으니 이제는 실제로 react 에 redux를 연결해보자.
// useSelector를 통해서 user를 가져옵니다.
const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector(state => state.user);
  console.log(user);
  useEffect(() => {
    dispatch(loginAction);
    dispatch(logoutAction);
    dispatch(loginAction);
  },[]);

  return(
    // 실제로 state를 화면에 쓰는 법 // 아래의 유저를 가져오는 방법 useSelector를 이용해서 가져옵니다.
        
        <div>
          {user ? <div>{user.nickname}님이 접속하셨습니다.</div> : <div>로그아웃 했습니다.</div>}
          {dummy.isLoggedIn && <PostForm />}
          {dummy.mainPosts.map((c)=> {
           return(
            <PostCard key={c} post={c} />
           );
          })}
        </div>
  );
};

export default Home;