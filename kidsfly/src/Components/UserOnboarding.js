import React, { Component } from 'react';
import UserFormDetails from './UserFormDetails';
import UserFormPersonalDetails from './UserFormPersonalDetails';
import Confirm from './Confirm';
import SuccessPage from './SuccessPage';

export class UserOnBoarding extends Component {
    state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  
    // Proceed to next step
    nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
    };
  
    // Go back to prev step
    prevStep = () => {
      const { step } = this.state;
      this.setState({
        step: step - 1
      });
    };
  
    // Handle fields change
    handleChange = input => e => {
      this.setState({ [input]: e.target.value });
    };
  
    render() {
      const { step } = this.state;
      const { firstName, lastName, email, password } = this.state;
      const values = { firstName, lastName, email, password };
  
      switch (step) {
        case 1:
          return (
            <UserFormDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <UserFormPersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 3:
          return (
            <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          );
        case 4:
          return <SuccessPage />;
      }
    }
  }
  
  export default UserOnBoarding;