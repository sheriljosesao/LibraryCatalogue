import React, { Component } from 'react';
import {
	ReactHover, 
} from 'react-hover';
import './LibraryItem.css';

/*const optionsCursorTrueWithMargin = {
      followCursor:true,
      shiftX:20,
      shiftY:0
}*/


class LibraryItem extends Component {

	constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
 

	render() {


		return (
			

			<div className="LibarayItem" onMouseEnter={this.handleMouseHover}
          	onMouseLeave={this.handleMouseHover} >
          	<>
        	<div key={this.props.info.biblionumber}><b>Title: </b> {this.props.info.title}</div>
        		<p><b>Author: </b> {this.props.info.author}</p>
        		<p><b>Date: </b> {this.props.info.copyrightdate}</p> 
				
        		</>

        	{
         	 this.state.isHovering &&
         	 <>
         	 <p><b>Subjects: </b> {this.props.info.Subjects.split(";").map(item => 
					`${item}`).join(", ") }</p>
         	 <p><b>Book Number: </b>{this.props.info.isbn}</p>
         	 </>
        	}


        	</div> 

        	

		);
  }
}

export default LibraryItem; 

{/*<div className="LibarayItem">
	          <ReactHover 
	          	options={optionsCursorTrueWithMargin}>
	            <ReactHover.Trigger type='trigger'>
	               <div> hi hello </div> <TriggerTest /> 
	               <div key={this.props.info.biblionumber}>Title: {this.props.info.title}</div>
        			<p>Author: {this.props.info.author}</p>
        			<p> Date: {this.props.info.copyrightdate}</p>

	            </ReactHover.Trigger>
	            <ReactHover.Hover type='hover'>
	                <div> 'This is the hover test' </div> <HoverTest/>
	                <p>Subjects: {this.props.info.Subjects}</p>
         	 		<p>Book Number:{this.props.info.isbn}</p>
	            </ ReactHover.Hover>
	          </ReactHover>
	        </div>*/}


  




