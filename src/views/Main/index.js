import React from 'react'
import Layout from '../../components/layout/Layout'
import List from '../../components/transactions/List'
import Head from '../../components/header/HeaderCard'

export default class Main extends React.Component {
  render () {
    return (
      <Layout navigation={this.props.navigation}>
        <Head />
        <List />
      </Layout>
    )
  }
}
