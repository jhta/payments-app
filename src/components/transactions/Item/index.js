import React from 'react'
import PropTypes from 'prop-types'
import { Text, ListItem, Body, Right } from 'native-base'

const getColor = (type = 'expense') => type === 'income' ? '#00AA00' : '#CC0000'

const getValueIcon = (type = 'expense') => type === 'income' ? '+' : '-'

const Item = ({ text = '', type = 'expense', price = 0 }) => (
  <ListItem>
    <Body>
      <Text>{text}</Text>
    </Body>
    <Right>
      <Text note style={{ color: getColor(type) }}>
        {`${getValueIcon(type)}${price}`}
      </Text>
    </Right>
  </ListItem>
)

Item.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string
}

export default Item
