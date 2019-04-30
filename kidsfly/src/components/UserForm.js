import React from 'react';
import { addTrip } from '../actions';
import { connect } from 'react-redux';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            airportName: '',
            airline: '',
            departureTime: '',
            kidsFlying: ''
        };
    }

    addTrip = e => {
        e.preventDefault();
        const newTrip = {
            airportName: this.state.airportName,
            airline: this.state.airline,
            departureTime: this.state.departureTime,
            kidsFlying: this.state.kidsFlying
        }
        this.props.addTrip(newTrip);

        this.setState({
            airportName: '',
            airline: '',
            departureTime: '',
            kidsFlying: ''
        })
    }
    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
          <div className="UserForm">
            <form onSubmit={this.addTrip}>
              <input
                onChange={this.handleInputChange}
                placeholder="airport name"
                value={this.state.airportName}
                name="airport name"
                type='text'
              />
              <input
                onChange={this.handleInputChange}
                placeholder="airline"
                value={this.state.airline}
                name="airline"
                type='text'
              />
              <input
                onChange={this.handleInputChange}
                placeholder="departure time"
                value={this.state.departureTime}
                name="departure time"
                type='text'
              />
              <input
                onChange={this.handleInputChange}
                placeholder="number of kids flying"
                value={this.state.kidsFlying}
                name="kids flying"
                type='number'
              />
              <button type="submit">Add Trip</button>
            </form>
        </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        addingTrip: state.addingTrip,
        error: state.error
    }
}

export default connect(mapStateToProps, {addTrip})(UserForm);
