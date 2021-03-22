import React, {useState, useCallback} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import PropTypes from 'prop-types';

const TextInput = ({value}) => {
  return(
    <div>{value}</div>
  )
};

TextInput.propTypes = {
  value:PropTypes.string,
}

const Signup = () => {

  // const [id, setId] = useState('');
  // const [nick, setNick] = useState('');
  // const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError,setPasswordError] = useState('');
  const [termError, setTermError] = useState(false);

    // 반복되는 작업은 줄일 수록 좋다. 커스텀 훅
    // 자식컴포넌트에 전달하는 함수는 usecallback으로 감싸준다
    const useInput = (initValue = null) => {
      const [value, setter] = useState(initValue);
      const handler = useCallback((e) => {
        setter(e.target.value);
      },[]);
      return [value, handler];
    };
  
    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term
    })
    if(password !== passwordCheck) {
      return setPasswordError(true);
    }
    if(!term) {
      return setTermError(true);
    }
    // usecallback 하면 dependency 배열에 state들도 넣어줘야한다.
    // usecallback이 기억력이 좋아 deps들이 바뀔 때 이벤트들도 다시 생성됩니다.
  }, [password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);

  },[password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  },[]);

  return(
    <>
      <Form onSubmit ={onSubmit} style={{padding: 10}}>
        <TextInput value="123123" />
        <div>
          <label htmlFor="user-id">아이디</label>
          <br/>
          <Input name="user-id" value={id} required onChange={onChangeId}/>
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br/>
          <Input name="user-nick" value={nick} required onChange={onChangeNick}/>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br/>
          <Input.Password name="user-password" type="password" value={password} required onChange={onChangePassword}/>
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br/>
          <Input.Password  name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck}/>
          {passwordError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <Checkbox name ="user-term" checked={term} onChange={onChangeTerm}>내 말을 잘들을 것을 동의하십니까?</Checkbox>
          {termError && <div style={{color:'red'}}>약관에 동의하셔야 합니다.</div>}
        </div>
        <div style={{marginTop : 10}}>
        <Button type="primary" htmlType="submit">가입하기</Button>
        </div>
      </Form>
    </>
  )
  }

export default Signup;