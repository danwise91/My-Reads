import React, {Component} from 'react'
//import book.js
import {PropTypes} from 'prop-types'
import BookShelves from './BookShelves'

class ListBooks extends Component{

state = {
	shelfs: [
	  {
		shelfName: 'Currently Reading',
		shelfId: 'currentlyReading'
	  },
	  {
		shelfName: 'Want To Read',
		shelfId: 'wantToRead'
	  },
	  {
	  	shelfName: 'Read',
	  	shelfId: 'read'
	  }
	]

}

render(){
	// console.log("Props", this.props)
	return(
		<div>
		{this.state.shelfs.map((shelf, index) =>(
		  <BookShelves
			title={shelf.shelfName}
			key={index}
			books={this.props.books.filter((book) => {book.shelf === shelf.shelfId})}
			onSwitchShelf = {this.props.onSwitchShelf}
			/>
		))}

		</div>

	   )
	}
}

export default ListBooks