import React from 'react'
import Footer from '../Footer'
import {
  Container,
  Content
} from 'native-base'

const Layout = ({ children, navigation }) => (
  <Container>
    <Content>
      { children }
    </Content>
    <Footer navigation={navigation} />
  </Container>
)

export default Layout
