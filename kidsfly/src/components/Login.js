import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from '../actions/RegisterLoginActions';
import { CSSTransition } from 'react-transition-group';


class Login extends React.Component {
    state={
        user: {
        firstname: '',
        lastname: '',
        phonenumber: '',
        password: '',
        },
        appearLogin: true
    }

    handleChanges = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(this.state);
        this.props.login(this.state)
        .then(() => {
            this.props.history.push('/home');
        })
    }

    render() {
        return (
            <CSSTransition
                in={this.state.appearLogin}
                appear={true}
                timeout={500}
                classNames="fade"
            >
                <div className="login">
                    <h1 className="login-text">Login</h1>
                    <hr/>
                    <form onSubmit={this.handleSubmit} className="form">
                        <input 
                            onChange={this.handleChanges}
                            placeholder="firstname"
                            name="firstname"
                            value={this.state.firstname}
                            className="input"
                            required
                        >
                        <input 
                            onChange={this.handleChanges}
                            placeholder="lastname"
                            name="lastname"
                            value={this.state.lastname}
                            className="input"
                            required
                        >
                        <input 
                            onChange={this.handleChanges}
                            placeholder="phone-number"
                            name="phone-number"
                            value={this.state.phonenumber}
                            className="input"
                            required
                        >
                        <input
                            onChange={this.handleChanges}
                            placeholder="password"
                            name="password"
                            value={this.state.password}
                            className="input"
                            required
                        >
                        </input>
                        </input>
                        </input>
                        </input>
                        <button className="login-button">Login</button>
                        <p>Don't have an account?</p>
                        <NavLink className="register-link" to="/register">*Register</NavLink>
                    </form>
                </div>
            </CSSTransition>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ...state, 
    }
}
export default connect(mapStateToProps, { login })(Login);