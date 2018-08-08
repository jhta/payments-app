import React from 'react'
import Layout from '../../components/layout/Layout'
import List from '../../components/transactions/List'

console.log('holi')
const SharedAccounts = ({ navigation }) => (
  <Layout navigation={navigation}>
    <List />
  </Layout>
)

export default SharedAccounts
