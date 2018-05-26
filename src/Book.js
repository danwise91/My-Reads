import React, {Component} from 'react'
// import PropTypes from 'prop-types'

class Book extends Component{

//create function to switch the shelf prop
switchShelf = (event) => {
	this.props.onSwitchShelf(event.target.value)
}


render(){
	console.log("Props", this.props)
	return (
			<li>
			  <div className="book">
			  <div className="book-top">
			   <div className="book-cover" style={{ 
			   	width: 128, 
			   	height: 193, 
			   	backgroundImage:`url("${this.props.imageURL}")`
			   }}>
				<div className="book-shelf-changer">
                   <select onChange={this.switchShelf} value={this.props.shelf}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                   </div>				
			  	  </div>
			  	  <div className="book-title">{this.props.title}</div>
			  	  {this.props.authors && this.props.authors.map((author, index) => (
			  	  	<div
			  	  	  className="book-authors"
			  	  	  key={index}
			  	  	  >{`${author}`}
			  	    </div>
			  	  ))}
			     </div>
			   </div>
			</li>
	    )
	}
}

export default Book