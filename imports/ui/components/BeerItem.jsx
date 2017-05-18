import React from "react";
import classNames from 'classnames';
import Beers from '../../collections/collections.js';


export default class BeerItem extends React.Component {

  	handleClick() {
  		var id = this.props.beera._id;
  		Meteor.call("removeBeer", id, function(e) {
  			if (e) alert(e.reason);
  		});
  	}
 
	render() {
		var date = moment(this.props.beera.date).format("DD/MM/YYYY");	
		var tail = this.props.beera.beers > 1 ? "beers" : "beer";
 
		return (
			<li onClick={this.handleClick}>On <strong>{date}</strong> grabbed <strong>{this.props.beera.beers}</strong> {tail}</li>
		);
	}

}	