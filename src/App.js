import React from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import ListBooks from './ListBooks'
import BookSearch from './BookSearch'

class BooksApp extends React.Component {
  state = {
    books: [],
    query: ''
    //create dummy data to test on
    // {
    //    "id": "1",
    //    "title": "To Kill a Mockingbird",
    //    "shelf": "read",
    //    "authors": ["Harper Lee"],
    //    "imageLinks": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
    // },

    // {
    //    "id": "2",
    //    "title": "Ender's Game",
    //    "shelf": "wantToRead",
    //    "authors": ["Orson Scott Card"],
    //    "imageLinks": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
    // },

    // {
    //    "id": "3",
    //    "title": "1776",
    //    "shelf": "currentlyReading",
    //    "authors": ["David McCullough"],
    //    "imageLinks": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
    // }
    // showSearchPage: false,
  }

//fetch books from the BooksAPI then set the state of books to all books
//retrieved from the API
  fetchBookDetails =() =>{
    BooksAPI.getAll().then((books) =>{
      this.setState({books: books})
    })
  }

  componentDidMount(){
    this.fetchBookDetails()
  }

//update BooksAPI with corresponding book and new shelf
  updateBook = (book, shelf) =>{
    BooksAPI.update(book, shelf).then(() =>{
      this.fetchBookDetails()
    })
  }

//update the search query
updateQuery = (query) => {
  this.setState({query: query.trim()})
}

  render() {
    return (
      <div className="app">
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
         <Route exact path='/' render ={() => (
            <ListBooks 
            books={this.state.books}
            onSwitchShelf = {this.updateBook}
           />
          )}/>
          
        <Route path='/search' render={() => (
           <BookSearch 
              query = {this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
             />
          )}/>
      </div>
       <div className="open-search">
          <Link
              to="/search">
              Add a book
          </Link>
        </div>
    </div>
    )
  }
}

export default BooksApp
