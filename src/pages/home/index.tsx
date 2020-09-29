import React from 'react'
import Layout from '../../layouts/layout'
import { Panel } from 'rsuite'
import './index.less'
import CollapseBox from '../../compontents/collapse-box'
import { ButtonColor } from '../../utils/colors'

const Home = () => {
  const BlockChainList = [
    [
      { name: 'Filecion', color: ButtonColor.blue, shapshots: [{ name: '2020-09-23T00:00/15T24:00', url: 'sdsdsds' }] },
      { name: 'Litecoin', color: ButtonColor.orange },
      { name: 'Dodgecoin' },
      { name: 'ZCash', color: ButtonColor.violet },
    ],
    [
      { name: 'Cash', color: ButtonColor.red },
      { name: 'Ethereum', color: ButtonColor.violet },
      { name: 'Tezos', color: ButtonColor.yellow },
      { name: 'Classic', color: ButtonColor.blue },
    ],
    [
      { name: 'IoTex' },
      { name: 'Hashgraph', color: ButtonColor.green },
      { name: 'Bition', color: ButtonColor.orange },
      { name: 'Dash', color: ButtonColor.red },
    ],
  ]

  return (
    <>
      <Layout>
        <Panel className='panel-box' shaded>
          {BlockChainList.map((item, index) => {
            return <CollapseBox data={item} key={item.length + index}></CollapseBox>
          })}
        </Panel>
      </Layout>
    </>
  )
}

export default Home
