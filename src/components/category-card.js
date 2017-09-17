import React, { Component } from 'react';
import propTypes from 'prop-types';
import Input from './input'


class CategoryCard extends Component {
	state = {
		editMode: false,
		budgeted: this.props.item.budgeted
	}

	handleInputChange = e => {
		this.setState({ budgeted: e.target.value })
	}

	handleSubmit = e => {
	  this.handleChangeEditMode();
	  this.props.onChangeCategoryBudget(this.props.item.id, this.state.budgeted)	
    }

	handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSubmit()
      }
    }

    handleChangeEditMode = () => {
    	this.setState({ editMode: !this.state.editMode})
    }

	render() {
		const {
		  item: { name, budgeted, activity }, 
	      onChangeCategoryBudget
		} = this.props;

    return (
    <div className="Category-card">
     <h1>{name}</h1>
     <h2>Budgeted: 
     {this.state.editMode ? (
     <Input
     autoFocus
     type="number"
     name="budgeted"
     value={this.state.budgeted}
     placeholder="Budgeted"
     onChange={this.handleInputChange}
     onKeyPress={this.handleKeyPress}
     onBlur={this.handleSubmit}
     />
     ) : (
     <span onClick={this.handleChangeEditMode}>{budgeted}</span>
     )}
     zł
     </h2>
     <div className="Category-card__assets">
     <span>Activity: {activity} zł</span>
     <span>Avilable {budgeted - activity} zł</span>
     </div>
   </div>
   )
  }
};

CategoryCard.propTypes = {
	item: propTypes.object.isRequired
};

export default CategoryCard;