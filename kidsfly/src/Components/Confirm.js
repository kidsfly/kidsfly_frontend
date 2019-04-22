import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
      e.preventDefault();
      // PROCESS FORM //
      this.props.nextStep();
    };
  
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };
  
    render() {
      const {
        values: { firstName, lastName, email, password, frequency, kidsflying, info }
      } = this.props;
      return (
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem primaryText="First Name" secondaryText={firstName} />
              <ListItem primaryText="Last Name" secondaryText={lastName} />
              <ListItem primaryText="Email" secondaryText={email} />
              <ListItem primaryText="Password" secondaryText={password} />
              <ListItem primaryText="Frequency" secondaryText={frequency} />
              <ListItem primaryText="Kids Flying" secondaryText={kidsflying} />
              <ListItem primaryText="Info" secondaryText={info} />
            </List>
            <br />
            <RaisedButton
              label="Confirm & Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
          </React.Fragment>
        </MuiThemeProvider>
      );
    }
  }
  
  const styles = {
    button: {
      margin: 15
    }
  };
  
  export default Confirm;