import React from 'react'
import PropTypes from 'prop-types'
import { H2, ListItem as Item } from 'native-base'
import SubList from '../SubList'

const ListItem = ({ category = '', items = [] }) => (
  <React.Fragment>
    <Item itemDivider><H2>{ category }</H2></Item>
    <SubList items={items} />
  </React.Fragment>
)

ListItem.propTypes = {
  category: PropTypes.string,
  items: PropTypes.array
}

export default ListItem
