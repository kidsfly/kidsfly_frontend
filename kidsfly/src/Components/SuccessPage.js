import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { from } from "rxjs";

export class SuccessPage extends Component {
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
      return (
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>An email with further instructions is on the way!</p>
          </React.Fragment>
        </MuiThemeProvider>
      );
    }
  }
  
  export default SuccessPage;