import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'

class BookSearch extends Component{

render(){
	return(
	<div>
	  <Link className="close-search" to="/">Back</Link>
	  <div className="search-books">
	   <div className="search-books-input-wrapper">
	   	<div className="search-books-bar">
	   	 <input
			className="searchBar"
			type="text"
			placeholder="Search By Title Or Author"
			value={this.props.query}
			onChange={this.props.onChange}
		   />
	      </div>
	    </div>	
	  </div>
   </div>
	)
}

}

export default BookSearch
	   
	    
		