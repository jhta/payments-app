import React from 'react'
import {
  CardItem,
  Right,
  Body,
  Text,
  H2
} from 'native-base'

const Account = ({ title = '', amount = 0 }) => (
  <CardItem>
    <Body>
      <H2>{title}</H2>
    </Body>

    <Right><Text>{amount}</Text></Right>
  </CardItem>
)

export default Account
