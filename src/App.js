import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { TransactionList, CategoryList} from './components'



class App extends Component {
  state = {
    transactions: [
      {
        id: 1,
        description: 'Potwierdzenie uczestnictwa w warsztatach WarsawJS',
        value: 20,
        date: '16.09.2017',
        category: 'Edukacja'
      },
      {
        id: 2,
        description: 'Bilet na pociąg',
        value: 120,
        date: '07.09.2017',
        category: 'Transport'
      },
      {
        id: 3,
        description: 'Części do samochodu',
        value: 430,
        date: '26.08.2017',
        category: 'Samochód'
      }
    ],
    categories: [
      {
        id: 1,
        name: 'Edukacja',
        budgeted: 100,
        activity: 50
      },
      {
        id: 2,
        name: 'Transport',
        budgeted: 200,
        activity: 123
      },
      {
        id: 3,
        name: 'Samochód',
        budgeted: 300,
        activity: 170
      }
    ],
  
  }

  handleRemoveTransaction = (id) => {
    this.setState({
      transactions: this.state.transactions.filter(transaction => transaction.id !== id)
    })
  }

  handleAddTransaction = (transaction) => {

    this.setState({
      transactions: [
      ...this.state.transactions, 
      {id: Math.random().toString(36).substring(7), ...transaction }
      ]
    })
  }

  handleChangeCategoryBudget = (id, value) => {
    const { categories } = this.state;
    const categoryIndex = categories.findIndex(category => category.id === id);

    if (categoryIndex === -1) {
      return;
    }

    categories[categoryIndex].budgeted = value;
    this.setState({ categories });
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <TransactionList
         items = {this.state.transactions}
         handleRemoveTransaction={this.handleRemoveTransaction}
         handleAddTransaction={this.handleAddTransaction}

        />
        <CategoryList 
        items={this.state.categories}
        handleChangeCategoryBudget={this.handleChangeCategoryBudget}
        />
      </div>      
    );
  }
}

export default App;
