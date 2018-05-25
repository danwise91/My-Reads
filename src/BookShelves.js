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
	return (
	<div className="list-books-content">
       <div>
          <div className="bookshelf">
           <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
             <ol className="books-grid">
             {this.props.books.map((book, index) =>(
             	<Book 
             		imageURL={book.imageURL} 
             		title={book.title}
             		key={book.id}
             		shelf={book.shelf}
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

export default BookShelves