import React from 'react';
import PropTypes from 'prop-types';
import http from '../../http';
import { API_LOGIN } from '../../api';

export default class Authorize extends React.Component {
    constructor(){
        super();
        this.state = {
            token: '',
        }
    }

    handleAuthorize = () => {
        const data = new FormData(this.authorizeForm);

        http.post(API_LOGIN, data)
            .then(token => this.setState({token}) )
            .catch(e => console.error(e));
    }

    render(){
        return (
            <form
                onSubmit={e => this.handleAuthorize()}
                ref={(authorizeForm) => { this.authorizeForm = authorizeForm; }}
            >
                <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">Authorize</span>
                        <input type="text" name="login" placeholder="Login" className="form-control" />
                        <password type="text" name="password" placeholder="Password" className="form-control" />
                    <button className="btn btn-outline-secondary" type="submit">Sign In</button>
                </div>
                </div>
            </form>
        )
    }
};