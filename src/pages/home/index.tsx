import React from 'react'
import Layout from '../../layouts/layout'
import { Panel } from 'rsuite'
import './index.less'
import CollapseBox from '../../compontents/collapse-box'

const Home = () => {
  return (
    <>
      <Layout>
        <Panel className='panel-box' shaded>
          <CollapseBox></CollapseBox>
        </Panel>
      </Layout>
    </>
  )
}

export default Home
