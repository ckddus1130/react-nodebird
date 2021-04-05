import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col, Card, Avatar,Form } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import {useSelector} from 'react-redux';
// 화면 먼저 구성중이라 더미 데이터로 임시로 확인
// 임시로 써놓은 user정보 dummy를 user reducer로 옮겨서 관리
// const dummy = {
//   nickname: '테크조',
//   Post: [],
//   Followings: [],
//   Follower:[],
//   isLoggedIn:false,
// };

const AppLayout = ({children}) => {
   const {user, isLoggedIn} = useSelector(state => state.user);
  return(
    <>
    <Menu mode="horizontal" >
      <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
      <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
      <Menu.Item key="email">
        <Input.Search enterButton style={{ verticalAlign: "middle" }} />
      </Menu.Item>
    </Menu>
    
    {/* antd는 기본적으로 반응형입니다. xs:모바일 sm:작은화면
    md:중간화면, lg: 큰화면 (가로 너비 기준) gutter:Col간의 간격 */}
    <Row gutter={10}>
       <Col xs={24} md={6} >
         {/* 삼항연산자 작업으로 로그인일시 로그인 안되었을 시 로그인화면 */}
       {isLoggedIn 
       ? <UserProfile/>
        :<LoginForm />
        }
      </Col>
      <Col xs={24} md={12}>
        {children}
      </Col>
      <Col xs={24} md={6}>
        
      </Col>
    </Row>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
}

export default AppLayout;