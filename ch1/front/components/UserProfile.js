import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';
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
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction);
  }, []);

  return (
    <div>
      <Card actions={[
        <div key="twit">
          짹짹
          <br />
          {me.Post.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {me.Followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {me.Follower.length}
        </div>,

      ]}
      >
        <Card.Meta
          avatar={<Avatar>{me.nickname[0]}</Avatar>}
          title={me.nickname}
        />
        <Button onClick={onLogout}>로그아웃</Button>
      </Card>
    </div>
  );
};

export default UserProfile;
