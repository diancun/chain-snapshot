import React from 'react'
import Head from 'next/head'
import { Header, Container, Content } from 'rsuite'
import 'rsuite/lib/styles/index.less'

const Home = () => (
  <div>
    <Head>
      <title>Chain-Shapshot</title>
    </Head>

    <Container>
      <Header>Chain-Shapshot</Header>
      <Content>Container</Content>
    </Container>
  </div>
)

export default Home
