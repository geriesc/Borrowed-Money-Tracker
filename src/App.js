import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TransactionForm from './transactionForm'

class App extends Component {
  state = {
    transactions: []
  }

  addTransaction = (transaction) => {
    this.setState({
      transactions: [...this.state.transactions, transaction]
    })
  }

  render() {
    var list = []
    var total = 0
    this.state.transactions.forEach(transaction => {
      total = total + transaction.amount
      list.push(
        <ListItem
        name={transaction.name}
        amount={transaction.amount}/>
          )
    })
    return (
      <div className="App">
        <div>
      <header className="App-header">
      
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="Borrowed Money">Borrowed Money</h1>
    </header>
    <p className="App-intro">
      Keep track of the money people borrowed from you. <br /> Input.<br /> Enter. <br />Then wait for payment.
      <br /> That simple.  
    </p>
    </div>

        <TransactionForm addTransaction={this.addTransaction} />
          <div className="col-sm-6">
        <table className="debt-history-table">
          <thead>
            <tr>
              <td>Borrower's Name</td>
              <td>Amount Borrowed</td>
              </tr>
              </thead>
          <tbody>
            {list}
            <tr>
              <td> Total: </td>
                <td> {total} </td>
             </tr>
           </tbody>
          </table>
            </div>
            </div>
      );
    }
  }

  class ListItem extends Component {
    render() {
      return (
        <tr>
          <td>
            {this.props.name}
            </td>

            <td>
              {this.props.amount}
              </td>
              </tr>
      )
    }
  }

export default App;

/*
// Create an application that allows you to keep a list of friends that owe you money.
// The application allows you to add items to a list that keeps track of your friends' debts to you.

// The interface allows you to add a friend and their debt to a list, and the list is rendered in a table.

// For each row of the table, a button is present with the label "paid". Pressing this button removes that item from the list

// Use create-react-app to start a new project, and push the source to github under a name of your choosing
*/