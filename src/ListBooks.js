import React, {Component} from 'react'
//import book.js
import {PropTypes} from 'prop-types'

import BookShelves from './BookShelves'

class ListBooks extends Component{

state = {
	shelfs: [
	  {
		shelfName: 'Currently Reading',
		// shelfId: ''
	  },
	  {
		shelfName: 'Want To Read',
		// shelfId: ''
	  },
	  {
	  	shelfName: 'Read'
	  }
	]

}


render(){
	const book = this.props.books
	// console.log("Props", this.props)
	return(
		<div>
		{this.state.shelfs.map((shelf, index) =>(
		  <BookShelves
			title={shelf.shelfName}
			key={index}
			books={this.props.books}
			onSwitchShelf = {this.props.onSwitchShelf}
			/>
		))}
		</div>
	   )
	}
}

export default ListBooks