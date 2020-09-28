import React, { useState } from 'react'
import { List, FlexboxGrid, Button, Icon, Panel, Animation } from 'rsuite'
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem'
const { Collapse } = Animation

const CollapseBox = () => {
  const [show, setShow] = useState(false)
  const handleToggle = () => {
    setShow(!show)
  }
  return (
    <>
      <Button onClick={handleToggle} size='lg' color='cyan'>
        Filecoin
      </Button>

      <Collapse in={show}>
        {(props, ref) => (
          <Panel {...props} ref={ref} header='Filecoin' className='info-box'>
            <List>
              <List.Item>
                <FlexboxGrid>
                  <FlexboxGridItem colspan={23}>
                    <span>2020-09-23T00:00/15T24:00</span>
                  </FlexboxGridItem>
                  <FlexboxGrid.Item colspan={1}>
                    <Icon icon='download' />
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
            </List>
          </Panel>
        )}
      </Collapse>
    </>
  )
}

export default CollapseBox
