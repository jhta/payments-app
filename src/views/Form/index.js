import React from 'react'
import { Form as NativeForm, Left, Row, Label, Icon, Item, Input, Picker, Button, Right } from 'native-base'
import { Text } from 'react-native'
import Layout from '../../components/layout/Layout'
import AccountInput from '../../components/form/Account'

const Form = props => (
  <Layout navigation={props.navigation} hideFooter>
    <NativeForm>
      <Item>
        <Input placeholder='Cost (COP)' />
      </Item>
      <Item>
        <Input placeholder='Description' />
      </Item>
      <Item>
        <Left><Label>Category: </Label></Left>
        <Right>
          <Picker
            mode='dropdown'
            iosIcon={<Icon name='ios-arrow-down-outline' />}
            placeholder='Food'
            placeholderStyle={{ color: '#bfc6ea' }}
            placeholderIconColor='#007aff'
          >
            <Picker.Item label='Food' value='key0' />
            <Picker.Item label='Transport' value='key1' />
            <Picker.Item label='House' value='key2' />
            <Picker.Item label='Fun' value='key3' />
            <Picker.Item label='Others' value='key4' />
          </Picker>
        </Right>
      </Item>
      <AccountInput />
     <Item>
        <Row>
          <Left><Label>Type: </Label></Left>
          <Right>
            <Picker
              mode='dropdown'
              iosIcon={<Icon name='ios-arrow-down-outline' />}
              placeholder='Income'
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor='#007aff'
            >
              <Picker.Item label='Income' value='key0' />
              <Picker.Item label='Expense' value='key1' />
              <Picker.Item label='Transfer' value='key2' />
            </Picker>
          </Right>
        </Row>
      </Item>
      <Button block><Text style={{color: 'white'}}>Add</Text></Button>
    </NativeForm>
  </Layout>
)

export default Form
