import React, { useCallback } from 'react';
import Link from 'next/link';
import { Form, Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../pages/signup';
import { LOG_IN_REQUEST } from '../reducers/user';

const LoginForm = () => {
  // 커스텀훅을 활용
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { isLoggingIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    // 액션을 쓰기가 너무 번거로울 때는 type을 이용 가능
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        id, password,
      },
    });
  }, [id, password]);

  return (
    <>
      <Form style={{ padding: 10 }} onSubmit={onSubmitForm}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input.Password name="user-password" value={password} onChange={onChangePassword} type="password" required />
        </div>
        <div>
          <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
          <Link href="signup"><a><Button>회원가입</Button></a></Link>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
