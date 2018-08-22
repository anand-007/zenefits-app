import React, { Component } from 'react';

/**
* Company component is responsible for showing company related details
**/

class Company extends Component {

   constructor(props) {
    super(props);
    this.state = {"people": []};
  }

   render() {
      return (
         <div>
            <div style={{"height":'100%',"width":'100%'}}>
	            <center>
		            <p>{this.props.company.name}</p>
		            <p>{this.props.company.street1}</p>
		            <p>{this.props.company.zip}</p>
		            <p>{this.props.company.city}</p>
	            </center>
            </div>
         </div>

      );
   }
}
export default Company;