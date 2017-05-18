import React from "react";
import classNames from 'classnames';
import Beers from '../../collections/collections.js';
import BeerItem from '../components/BeerItem.jsx';

export default class BeerList extends React.Component {


	renderBeers() {		
		return this.props.beer.map((beera) => {			
		  return <BeerItem beera={beera} />;
		});
	}

	render(){	

		
		return (
			<div className="panel panel-default">			  
			  <div className="panel-heading">
			    <h3 className="panel-title">History
			    <small> click to remove</small>
			    </h3>			    
			  </div>
			  <div className="panel-body">
			    <ul>
			    				    	
			    	{this.renderBeers()}
			    	
			    </ul>
			  </div>
			</div>
		);
	}

}
