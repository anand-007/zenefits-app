import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {fetchCompanyDetails, fetchEmployees, fetchEmployeeDetail} from './services/zenefitsclient.js'
import config from './config.js';
import 'react-tabs/style/react-tabs.css';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import async from 'async';
import './style/style.css'
import Location from './Locations.js';
import Company from './Company.js';


var ReactBsTable  = require('react-bootstrap-table');

var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;


/**
* App component is responsible for holding the layout after logging in.
**/


class App extends Component {


 constructor(props) {
    super(props);
    this.state = {"people": [],"company":{}, "locations":[]};
  }

componentDidMount(){
  var self = this;
  var employeeList = [];
    fetchCompanyDetails().then(function(response) { /* handle response */ 
      var result = response.json();
      return result;
    }).then(function(myJson) {
        config.PEOPLE_API = myJson.data.data[0].people.url;
        config.LOCATION_API = myJson.data.data[0].locations.url;
        config.DEPARTMENT_API = myJson.data.data[0].departments.url;

        
        var companyDetails = {};
        companyDetails.name = myJson.data.data[0].legal_name;
        companyDetails.street1 = myJson.data.data[0].legal_street1;
        companyDetails.zip = myJson.data.data[0].legal_zip;
        companyDetails.city = myJson.data.data[0].legal_city;
        companyDetails.logo = myJson.data.data[0].logo_url;

        var locations = [];
        locations = myJson.data.data[0].locations.data;

        fetchEmployees().then(function(response) { /* handle response */ 
          var result = response.json();
          return result;
        }).then(function(myJson) {

        	for(var i=0;i<myJson.data.data.length;i++){
				var employeeDetail = myJson.data.data[i];
				if(employeeDetail.employments.data[0].comp_type=="salary"){
				 	employeeDetail.salary = '$'+employeeDetail.employments.data[0].annual_salary;
				 } else if(employeeDetail.employments.data[0].comp_type=="hourly"){
				 	employeeDetail.salary = '$'+employeeDetail.employments.data[0].pay_rate+'/hour';
				 }
				if(employeeDetail.manager!=null){
				 	employeeDetail.manager_name = employeeDetail.manager.first_name + " "+ employeeDetail.manager.last_name;
				 }
				 if(employeeDetail.location){
				 	employeeDetail.location = employeeDetail.location.name;
				 }
				 employeeList.push(employeeDetail);
			}
			self.setState({"people":employeeList, "company":companyDetails, "locations": locations});

        });
    });
}

render() {
      return (
       <div>
		   <div id="header" class="header">
		   	<center><img src={this.state.company.logo} class="header-img"></img></center>
		   </div>           
			<Tabs>
			    <TabList>
			      <Tab>Company</Tab>
			      <Tab>Locations</Tab>
			      <Tab>Employees</Tab>
			    </TabList>
			    <TabPanel>
			    	<Company company={this.state.company}/>
				</TabPanel>
			    <TabPanel>
			    	<Location locations={this.state.locations}/>
			    </TabPanel>
			    <TabPanel>
				    <BootstrapTable data={this.state.people} search={true}>
				         <TableHeaderColumn isKey dataField='first_name'>First Name</TableHeaderColumn>
				      <TableHeaderColumn dataField='last_name'>Last Name</TableHeaderColumn>
				      <TableHeaderColumn dataField='work_email'>Work Email</TableHeaderColumn>
				            <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
				            <TableHeaderColumn dataField='manager_name'>Manager Name</TableHeaderColumn>
				            <TableHeaderColumn dataField='salary'>Salary</TableHeaderColumn>
				    </BootstrapTable>
			   	</TabPanel>
			 </Tabs>
			 <div id="footer">
			 </div>
        </div>
      );
   }
}
export default App;