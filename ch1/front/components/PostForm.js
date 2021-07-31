import React, { useCallback, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';
// posrForm 의 dummy 데이터도 post reducer로 옮겨서 state를 관리해줍니다.
// const dummy = {
//   isLoggedIn: true,
//   imagePaths: [],
//   mainPosts:[{
//     User:{
//       id:1,
//       nickname:'테크초',
//     },
//     content:'첫 번째 게시물',
//     img:'https://picsum.photos/200',
//   }],
// }

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { imagePaths, isAddingPost, postAdded } = useSelector((state) => state.post);

  // 게시글 작성 후 써져있는 글씨를 제거해주는 작업을 useEffect로 해줌
  useEffect(() => {
    setText('');
  }, [postAdded === true]);
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        text,
      },
    });
  }, []);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <Form style={{ margin: '30px 0px 30px 0px' }} encType="multipart/form-data" onSubmit={onSubmitForm}>
        <Input.TextArea maxLength={140} placeholder="어느 신기한 일이 있었나요?" value={text} onChange={onChangeText} />
        <div>
          <Input type="file" multiple hidden />
          <Button>이미지 업로드</Button>
          <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>짹짹</Button>
        </div>
        <div>
          {imagePaths.map((v) => (
            <div key={v} style={{ display: 'inline-block' }}>
              <img src={`http:localhost:3000/${v}`} style={{ width: '200px' }} alt={v} />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          ))}
        </div>
      </Form>
    </div>
  );
};

export default PostForm;
