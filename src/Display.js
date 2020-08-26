import React, { Component } from 'react';
import report from './report.json';
import './Display.css';
import LibraryItem from './LibraryItem.js'


class Display extends Component {


	render() {


		return (
			<>

      <div className="MainContainer">

      <h2>Library Catalogue</h2>

      <div className="LibarayList"> 

      {report.map( (item) => (

        <LibraryItem info={item} />

        ))}

      </div> 
      </div>

      </>
    
		);
  }
}

export default Display; 

