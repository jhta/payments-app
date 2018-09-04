import React from 'react'
import Footer from '../Footer'
import {
  Container,
  Content
} from 'native-base'

const Layout = ({ children, navigation, hideFooter }) => (
  <Container>
    <Content>
      { children }
    </Content>
    { !hideFooter && <Footer navigation={navigation} /> }
  </Container>
)

export default Layout
