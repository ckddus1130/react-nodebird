// header나 footer 같이 반복되는 레이아웃을 이곳에서 관리합니다.
// Hooks 성능문제 해결을 위해서도 반복되는 레이아웃을 분리해 줍니다.
//_app.js는 next에서 기본적으로 제공해주는 것
// 이 파일을 index,profile,signup페이지들의 부모역할을 합니다.
// 이 파일에 페이지들의 공통적인 부분을 모아주세요

import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';

//Component는 next에서 주는 props로 pages 안에 있는 indexm,profile 등을 준다.
// 레이아웃을 빼주는작업만으로도 form작업시 위에 레이아웃은 렌더링 되지않아 약간의 성능 향상
const NodeBird = ({Component}) => {
  return(
    <>
    <Head>
      <title>NodeBird</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.19/antd.css"/>
    </Head>
    <AppLayout>
      <Component />
    </AppLayout>
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
};

export default NodeBird;