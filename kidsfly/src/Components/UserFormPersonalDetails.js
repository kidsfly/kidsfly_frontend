import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class UserFormPersonalDetails extends Component {
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    };
  
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };
  
    render() {
      const { values, handleChange } = this.props;
      return (
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Enter Personal Flight Details" />
            <TextField
              hintText="Enter Flight Frequency"
              floatingLabelText="Frequency"
              onChange={handleChange('frequency')}
              defaultValue={values.frequency}
            />
            <br />
            <TextField
              hintText="Enter How Many Kids Fly"
              floatingLabelText="Kids Flying"
              onChange={handleChange('kids flying')}
              defaultValue={values.kidsflying}
            />
            <br />
            <TextField
              hintText="Optional Additional Info"
              floatingLabelText="Info"
              onChange={handleChange('info')}
              defaultValue={values.info}
            />
            <br />
            <RaisedButton
              label="Continue"
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
  
  export default UserFormPersonalDetails;