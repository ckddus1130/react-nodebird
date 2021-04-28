import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';
// 임시로 써놓은 user정보 dummy를 user reducer로 옮겨서 관리하려고
// user reducer로 옮긴다.
// const dummy = {
//   nickname: '테크조',
//   Post: [],
//   Followings: [],
//   Follower:[],
//   isLoggedIn:false,
// };

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutAction);
  }, []);

  return (
    <div>
      <Card actions={[
        <div key="twit">
          짹짹
          <br />
          {user.Post.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {user.Followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {user.Follower.length}
        </div>,

      ]}
      >
        <Card.Meta
          avatar={<Avatar>{user.nickname[0]}</Avatar>}
          title={user.nickname}
        />
        <Button onClick={onLogout}>로그아웃</Button>
      </Card>
    </div>
  );
};

export default UserProfile;
