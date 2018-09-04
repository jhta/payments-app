import React, { Component } from 'react'
import HeaderButton from '../components/layout/HeaderButton'

export default  (EnhaceComponent => {
  class EnhacedComponent extends Component {
    constructor (props) {
      super(props)
      console.log('test')
    }

    static navigationOptions = ({ navigation }) => ({
      headerRight: (<HeaderButton navigation={navigation} />)
    })

    render () {
      return (
        <EnhaceComponent {...this.props} />
      )
    }
  }

  return EnhacedComponent
})

