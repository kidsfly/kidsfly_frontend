import React from 'react';
import { getTrips } from '../actions';
import { connect } from 'react-redux';

class UserList extends React.Component {
    componentDidMount() {
        this.props.getTrips();
    }

    render() {
        return (
            <div>
                <div className='trip-list'>
                    {this.props.trips.map(trip => (
                        <div key={trip.id}>
                        <h2>Airport Name: {trip.airportName}</h2>
                        <p>Airline: {trip.airline}</p>
                        <p>Departure Time: {trip.departureTime}</p>
                        <p>Kids Flying: {trip.kidsflying}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingTrips: state.fetchingTrips,
        trips: state.trips
    }
}

export default connect(mapStateToProps, {getTrips})(UserList)