import React from 'react'
import ListItem from '../ListItem'

const datas = [
  {
    category: 'Jun 21',
    items: [
      {
        text: 'Food',
        type: 'expense',
        price: '15.000',
        currency: 'COP'
      },
      {
        text: 'Uber',
        type: 'expense',
        price: '12.000',
        currency: 'COP'
      },
      {
        text: 'Salary',
        type: 'income',
        price: '300.000',
        currency: 'COP'
      }
    ]
  },
  {
    category: 'Jun 20',
    items: [
      {
        text: 'Uber',
        type: 'expense',
        price: '12.000',
        currency: 'COP'
      },
      {
        text: 'Freelance',
        type: 'income',
        price: '200.000',
        currency: 'COP'
      },
      {
        text: 'Friends',
        type: 'expense',
        price: '12.000',
        currency: 'COP'
      }
    ]
  }
]

const List = props => (
  <React.Fragment>
    {
      datas.map((el, index) => (<ListItem key={index} {...el} />))
    }
  </React.Fragment>
)

export default List
