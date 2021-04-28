import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

// 액션을 디스패치하는 방법 디스패치만 했으니 이제는 실제로 react 에 redux를 연결해보자.
// useSelector를 통해서 user를 가져옵니다.
const Home = () => {
  // const dispatch = useDispatch();
  //  const { isLoggedIn, user } = useSelector(state => state.user);
  // 가져오는예시 : useEffect(() => {
  //   dispatch(loginAction);
  //   dispatch(logoutAction);
  //   dispatch(loginAction);
  // },[]);

  // 성능 최적화를 위해 user.isLoggedIn 처럼 더 잘게 쪼개서도 사용합니다.
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'HELLO_SAGA',
    });
  }, []);
  return (
  // 실제로 state를 화면에 쓰는 법 // 아래의 유저를 가져오는 방법 useSelector를 이용해서 가져옵니다.
    <div>
      {user ? (
        <div>
          {user.nickname}
          님이 접속하셨습니다.
        </div>
      ) : <div>로그아웃 했습니다.</div>}
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => (
        <PostCard key={c} post={c} />
      ))}
    </div>
  );
};

export default Home;
