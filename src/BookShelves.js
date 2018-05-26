import React, {Component} from 'react'
import Book from './Book'
class BookShelves extends Component{

//list 3 shelves and map over books to list them for 
//each shelf 


updateShelf = (book, shelf) => {
	this.props.onSwitchShelf(book, shelf)
}
//for testing the filter
//shelf="currentlyReading"

render(){
	// console.log("Prop", this.props)
  //book={book}
	return (
      <div className="bookshelf">
       <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
             {this.props.books.map((book, index) =>(
             	<Book 
             		title={book.title}
                author={book.authors}
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
	)
}

}

export default BookShelves