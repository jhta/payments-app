import React from 'react'
import {
  Left,
  Label,
  Icon,
  Item,
  Picker,
  Right
} from 'native-base'

const Account = props => (
  <Item>
    <Left><Label>Account: </Label></Left>
    <Right>
      <Picker
        mode='dropdown'
        iosIcon={<Icon name='ios-arrow-down-outline' />}
        placeholder='Select your SIM'
        placeholderStyle={{ color: '#bfc6ea' }}
        placeholderIconColor='#007aff'
      >
        <Picker.Item label='Wallet' value='key0' />
        <Picker.Item label='ATM Card' value='key1' />
        <Picker.Item label='Debit Card' value='key2' />
        <Picker.Item label='Credit Card' value='key3' />
        <Picker.Item label='Net Banking' value='key4' />
      </Picker>
    </Right>
  </Item>
)

export default Account
