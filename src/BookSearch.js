import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'

class BookSearch extends Component{

render(){
	return(
	  <div>
		<Link className="close-search" to="/">Back</Link>
	  </div>
	)
}

}

export default BookSearch