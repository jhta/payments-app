import React, { Component } from 'react'
import {
  Header as BaseHeader,
  Button,
  Left,
  Right,
  Icon,
  Body,
  Title
} from 'native-base'

export default class Header extends Component {
  render () {
    return (
      <BaseHeader>
        <Left />
        <Body>
          <Title>Accounts</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='add' />
          </Button>
        </Right>
      </BaseHeader>
    )
  }
}
