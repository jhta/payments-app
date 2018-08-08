import React from 'react'
import Main from './src/views/Main'
import Analytics from './src/views/Analytics'
import Config from './src/views/Config'
import SharedAccounts from './src/views/SharedAccounts'
import { createStackNavigator } from 'react-navigation'


class Home extends React.Component {
  render () {
    return (
      <Main />
    )
  }
}


export default createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: () => ({
      title: 'Your Accounts'
    })
  },
  Analytics: {
    screen: Analytics,
    navigationOptions: () => ({
      title: 'Analytics'
    })
  },
  Config: {
    screen: Config,
    navigationOptions: () => ({
      title: 'Config'
    })
  },

  SharedAccounts: {
    screen: SharedAccounts,
    navigationOptions: () => ({
      title: 'Shared Accounts'
    })
  }
})
