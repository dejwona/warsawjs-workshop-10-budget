import React from 'react';
import PropTypes from 'prop-types'
import TransactionCard from './transaction-card'
import TransactionForm from './transaction-form'

const TransactionList = ( {items, handleRemoveTransaction, handleAddTransaction} ) => (
	<div>
	<TransactionForm onSubmit={handleAddTransaction} />
	{items.map(item =>  (
		<TransactionCard 
		key={item.id} 
		item={item} 
		onRemoveTransaction={handleRemoveTransaction}

		/>
	 ))}
	</div>
);

TransactionList.propTypes = {
	items: PropTypes.array.isRequired
};



export default TransactionList;