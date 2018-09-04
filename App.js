import Main from './src/views/Main'
import Analytics from './src/views/Analytics'
import Config from './src/views/Config'
import SharedAccounts from './src/views/SharedAccounts'
import Form from './src/views/Form'
import { createStackNavigator } from 'react-navigation'

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
  },
  Form: {
    screen: Form,
    navigationOptions: () => ({
      title: 'Add item' 
    })
  }
}, {
  transitionConfig: () => ({ screenInterpolator: () => null })
})
