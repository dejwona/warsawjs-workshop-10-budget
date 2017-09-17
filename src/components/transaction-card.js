import React from 'react';
import propTypes from 'prop-types';

const TransactionCard= ({ item: { description, value, date, category, id }, onRemoveTransaction }) => (
   <div className = "Transaction-card">
   <div 
   className="Transaction-card__remove"
   onClick={() => onRemoveTransaction(id)}
   >
   X
   </div>
     <h1>{description}</h1>
     <h2>{value}</h2>
     <div className="Transaction-card__assets">
     <span>{date}</span>
     <span>{category}</span>
     </div>
   </div>
);

TransactionCard.propTypes = {
	item: propTypes.object.isRequired
};

export default TransactionCard;