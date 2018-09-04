import React from 'react'
import Layout from '../../components/layout/Layout'
import List from '../../components/transactions/List'
import Head from '../../components/header/HeaderCard'
import withButtonHeader from '../../utils/withButtonHeader'

const Main = props => (
  <Layout navigation={props.navigation}>
    <Head />
    <List />
  </Layout>
)

export default withButtonHeader(Main)
