import React from 'react';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Home = () => {
  return(
    <>
    <Head>
      <title>NodeBird</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.19/antd.css"/>
    </Head>
    <AppLayout>
        <div>Hello Next~!</div>
      </AppLayout>
    </>
  );
};

export default Home;