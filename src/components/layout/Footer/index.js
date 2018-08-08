import React, { Component } from 'react'
import {
  Footer as BaseFooter,
  FooterTab,
  Button,
  Icon
} from 'native-base'

const FooterButton = ({ onPress, active, route, icon }) => (
  <Button
    onPress={onPress}
    active={active === route}
  >
    <Icon
      active={active === route}
      name={icon}
      fontSize='30'
    />
  </Button>

)

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: this.props.navigation.state.routeName
    }
  }

  onNavigate = route => {
    this.props.navigation.navigate(route)
  }

  render () {
    const { navigation } = this.props
    return (
      <BaseFooter>
        <FooterTab>
          <FooterButton
            onPress={() => { this.onNavigate('Home') }}
            route={'Home'}
            active={this.state.active}
            icon='person'
          />
          <FooterButton
            onPress={() => { this.onNavigate('SharedAccounts') }}
            route={'SharedAccounts'}
            active={this.state.active}
            icon='people'
          />
          <FooterButton
            onPress={() => { this.onNavigate('Analytics') }}
            route={'Analytics'}
            active={this.state.active}
            icon='pie'
          />
          <FooterButton
            onPress={() => { this.onNavigate('Config') }}
            route={'Config'}
            active={this.state.active}
            icon='settings'
          />
        </FooterTab>
      </BaseFooter>
    )
  }
}

export default Footer
