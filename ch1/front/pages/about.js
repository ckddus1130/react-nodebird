import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
const About = () => {
  return(
    <>
    <Head>
      <title>NodeBird</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.19/antd.css"/>
    </Head>
    <AppLayout>
    <div>About페이지입니다.</div>
    </AppLayout>
    
    </>
  )
}
export default About;