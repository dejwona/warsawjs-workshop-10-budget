import React, { Component } from 'react';

import Input from './input';

class TransactionForm extends Component {
	state = {
	  description: '',
	  value: '',
	  date: '',
	  category: ''
	}

	handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value })
	}

    handleSubmitForm = e => {
      e.preventDefault();
      const {description, value, date, category } = this.state;

      this.props.onSubmit({ description, value, date, category })
    }

	render() {
	  const { description, value, date, category } = this.state;
	  return (
        <form onSubmit={this.handleSubmitForm}>
        <Input
        name="description"
        placeholder="Description"
        value={description}
        onChange={this.handleInputChange}
        />
        <Input
        name="value"
        placeholder="Value"
        value={value}
        onChange={this.handleInputChange}
        />
        <Input
        name="date"
        placeholder="Date"
        value={date}
        onChange={this.handleInputChange}
        />
        <Input
        name="category"
        placeholder="Category"
        value={category}
        onChange={this.handleInputChange}
        />
        <button>Add transaction</button>
        </form>
    )
  }
}

export default TransactionForm;