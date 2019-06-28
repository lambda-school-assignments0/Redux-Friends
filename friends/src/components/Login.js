import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    handleLogin = e => {
        e.preventDefault();
        this.props
            .login(this.state.credentials)
            .then(() => this.props.history.push('/protected'));
    };

    render() {
        return (
            <Form className='friend-form' onSubmit={this.handleLogin}>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button color='primary'>Log In</Button>
            </Form>
        )
    }
}

export default connect(
    null,
    { login }
)(Login);