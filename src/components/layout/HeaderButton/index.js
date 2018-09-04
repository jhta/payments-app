import React from 'react'
import { Button, Icon } from 'native-base'

const HeaderButton = props => (
  <Button
    primary
    transparent
    onPress={() => { props.navigation.navigate('Form') }}
  >
    <Icon name='add' />
  </Button>
)

export default HeaderButton
