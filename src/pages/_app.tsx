import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import '../styles/default.less'

class myApp extends App {
  render(): React.ReactElement {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Chain-Shapshot</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
export default myApp
