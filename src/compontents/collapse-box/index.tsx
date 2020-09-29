import React, { useState } from 'react'
import { List, FlexboxGrid, Button, Panel, Portal, IconButton } from 'rsuite'
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem'
import { ButtonColor } from '../../utils/colors'
import './index.less'
interface Shapshot {
  name: string
  url: string
}
interface BCItem {
  name: string
  color?: ButtonColor
  shapshots?: Shapshot[]
  show?: boolean
}
interface CollapseBoxProps {
  data: BCItem[]
}
interface CollapseContentProps {
  show: boolean
  name: string
  shapshots: Shapshot[]
  container: HTMLDivElement | undefined
}
const CollapseContent = ({ show, name, shapshots, container }: CollapseContentProps) => {
  const DownloadBtn = ({ url }: { url: string }) => {
    const onDownload = () => {
      return url
    }
    return (
      <IconButton
        className='icon-btn'
        appearance='subtle'
        icon={<img src='btn-download-h.svg' alt='download' />}
        onClick={onDownload}
      />
    )
  }
  return show ? (
    <Portal container={container}>
      <Panel header={name} className='info-box'>
        <List>
          {shapshots.map(item => {
            return (
              <List.Item key={item.name}>
                <FlexboxGrid>
                  <FlexboxGridItem colspan={23}>
                    <span>{item.name}</span>
                  </FlexboxGridItem>
                  <FlexboxGrid.Item colspan={1}>
                    <DownloadBtn url={item.url} />
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
            )
          })}
        </List>
      </Panel>
    </Portal>
  ) : null
}

interface CollapseCompProps {
  item: BCItem
  container: HTMLDivElement | undefined
}

const CollapseComp = ({ item, container }: CollapseCompProps) => {
  const [show, setShow] = useState(item.show ?? false)
  const handleToggle = () => {
    setShow(!show)
  }

  return (
    <>
      <Button
        className='bigger-btn'
        appearance='primary'
        onClick={handleToggle}
        size='lg'
        color={item.color}
        key={item.name}
      >
        {item.name}
      </Button>
      {item?.shapshots === undefined ? (
        <></>
      ) : (
        <CollapseContent container={container} name={item.name} show={show} shapshots={item.shapshots ?? []} />
      )}
    </>
  )
}

const CollapseBox = ({ data }: CollapseBoxProps) => {
  const [container, setContainer] = useState<HTMLDivElement>()

  return (
    <>
      <div className='btn-list'>
        {data.map(item => {
          return <CollapseComp item={item} container={container} key={item.name} />
        })}
      </div>
      <div
        ref={ref => {
          setContainer(ref ?? undefined)
        }}
      ></div>
    </>
  )
}

export default CollapseBox
