import React from 'react'
import Layout from '../../components/layout/Layout'
import List from '../../components/transactions/List'
import withButtonHeader from '../../utils/withButtonHeader'

const SharedAccounts = ({ navigation }) => (
  <Layout navigation={navigation}>
    <List />
  </Layout>
)

export default withButtonHeader(SharedAccounts)
