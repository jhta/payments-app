import React, { Component } from 'react'
import { ListView } from 'react-native'
import { Button, Icon, List } from 'native-base'
import Item from '../Item'

export default class SwipeableListExample extends Component {
  constructor (props) {
    super(props)
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      basic: true,
      listViewData: props.items 
    }
  }
  deleteRow (secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow()
    const newData = [...this.state.listViewData]
    newData.splice(rowId, 1)
    this.setState({ listViewData: newData })
  }
  render () {
    return (
      <List
        leftOpenValue={75}
        rightOpenValue={-75}
        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
        renderRow={(data, index) => <Item key={index} {...data} />}
        renderLeftHiddenRow={data =>
          <Button full onPress={() => alert(data)}>
            <Icon active name='build' />
          </Button>}
        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
          <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
            <Icon active name='trash' />
          </Button>}
      />
    )
  }
}
