import React from 'react';
import {Form, Input,Button, Card, Icon, Avatar} from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

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

const Home = () => {
  return(
        <div>
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