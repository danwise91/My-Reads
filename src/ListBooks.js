import React, {Component} from 'react'

import {PropTypes} from 'prop-types'
import BookShelves from './BookShelves'

class ListBooks extends Component{



render(){
	// console.log("Props", this.props)
	return(
		<div>
		//create the shelf for corresponding book shelf name
		  <BookShelves
			books={this.props.books.filter((book) => (book.shelf === "currentlyReading"))}
			title="Currently Reading"
			onSwitchShelf = {this.props.onSwitchShelf}
			/>

			<BookShelves
			books={this.props.books.filter((book) => (book.shelf === "wantToRead"))}
			title="Want Reading"
			onSwitchShelf = {this.props.onSwitchShelf}
			/>

			<BookShelves
			books={this.props.books.filter((book) => (book.shelf === "read"))}
			title="Read"
			onSwitchShelf = {this.props.onSwitchShelf}
			/>
		</div>
	   )
	}
}

export default ListBooks