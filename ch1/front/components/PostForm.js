import React from 'react';
import {Form, Input, Button} from 'antd';

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
  }],
}

const PostForm = () => {
  return(
    <div>
      <Form style={{margin : '20px' }} encType="multipart/form-data">
            <Input.TextArea maxLength={140} placeholder="어느 신기한 일이 있었나요?"/>
            <div>
              <Input type="file" multiple hidden />
              <Button>이미지 업로드</Button>
              <Button type="primary" style={{float:'right'}} htmlType="submit">짹짹</Button>
            </div>
            <div>
              {dummy.imagePaths.map((v,i) => {
                return(
                  <div key ={v} style={{display: 'inline-block'}}>
                    <img src={'http:localhost:3000/' + v} style={{width:'200px'}} alt={v} />
                    <div>
                        <Button>제거</Button>
                    </div>  
                  </div>
                )
              })}
            </div>
          </Form>
    </div>
  );
};

export default PostForm;