import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'

class BookSearch extends Component{

updateShelf = (book, shelf) => {
	this.props.onSwitchShelf(book, shelf)
}

render(){
	let showingBooks 
	//returns truthy if someone has typed into the input field
	 //if not then set it to whatever books originally was 
	if (this.props.query){
		const match = new RegExp(escapeRegExp(this.props.query), 'i')
		showingBooks = this.props.books.filter((book) => match.test(book.title))
	}else {
		showingBooks = this.props.books
	}

	showingBooks.sort(sortBy('title'))

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
	      <div className="search-book-results">
	      	<ol className="books-grid">
	      	  {showingBooks.map((book) =>(
	      	  		<Book
	      	  		  title={book.title}
		              authors={book.authors}
		              imgURL={book.imageLinks.thumbnail}
		              shelf={book.shelf}
             		  key={book.id}
             		  onSwitchShelf={(shelf) =>{
             			this.updateShelf(book, shelf)
             		  }} 
	      	  	   />
	      	  	))}
	      	</ol>
	      </div>
	    </div>	
	  </div>
   </div>
	)
}

}

export default BookSearch
	   
	    
		