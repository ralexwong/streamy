import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions' 

class GoogleAuth extends Component {

    // window.gapi.load is a google api function that will fire and use the clientId key that allows us to use
    // googles auth service. 
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1587598825-s0h1pvgfqmdk8epngaufn1uun05h7e31.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                // window.gapi.auth2.getAuthInstance() allows us to access the signIn/signOut functions built into the google auth service
                // this.auth is an object bound to this component as a reference
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }

    // checks if user is signedIn/Out using the authReducers
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn()
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign in with Google
                </button>
            )        
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.authReducer.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
