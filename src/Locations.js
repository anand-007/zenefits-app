import React, { Component } from 'react';
import './style/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/**
* Locations component is responsible for populating the Location of the company
**/

class Locations extends Component {

  render() {
        var locations = this.props.locations;
        var locationList = locations.map(function(location){
      return (
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{location.city}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                {location.street1}     
                {location.state}   
                {location.zip}     
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        );
        })

        return  <div>{ locationList }</div>
         
  }
}

export default Locations;
