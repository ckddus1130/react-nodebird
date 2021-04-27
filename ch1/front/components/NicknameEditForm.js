import React from 'react';
import {Form, Input, Button} from 'antd';

const NicknameEditForm = () => {
  return(
    <div>
      <Form style={{margin: '30px 0px 20px 0px', border:'1px solid #d9d9d9', padding: '20px'}}>
        <Input addonBefore="닉네임" />
        <Button  style={{margin:'10px 0px 0px 0px'}}type="primary">수정</Button>
      </Form>
    </div>
  );
};

export default NicknameEditForm;
