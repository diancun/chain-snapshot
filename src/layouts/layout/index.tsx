import React from 'react'
import { Header, Container, Content, Navbar } from 'rsuite'
import './index.less'
interface LayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <div className='show-container'>
      <Container>
        <Header className='app-header'>
          <Navbar appearance='inverse'>
            <Navbar.Header>
              <img src='logo.svg' alt='logo' />
              <span className='navbar-brand logo'>Chain-Shapshot</span>
            </Navbar.Header>
          </Navbar>
        </Header>
        <Content className='app-content'>{children}</Content>
      </Container>
    </div>
  )
}

export default Layout
