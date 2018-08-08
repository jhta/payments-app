import React from 'react'
import { View } from 'react-native'
import { Card } from 'native-base'
import Account from '../Account'

const Head = props => (
  <View>
    <Card style={{ margin: 0 }}>
      <Account amount={50000} title={'debit card'} />
      <Account amount={50000} title={'credit card'} />
      <Account amount={50000} title={'cash'} />
      <Account amount={50000} title={'paga diario'} />
    </Card>
  </View>
)

export default Head
