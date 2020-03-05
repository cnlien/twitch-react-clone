import React from 'react'
import { Button, Spinner } from 'reactstrap';

class GoogleAuth extends React.Component {

    state = {
        isSignedIn: null,
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '65985413382-v5kj9mnogo6umn7t8jrprrquun3jvj7q.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                // this.onAuthChange(); Alternate way to call above method
                this.auth.isSignedIn.listen(this.onAuthChange);
                console.log(this.state)
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    };

    handleSignIn = () => {
        this.auth.signIn();
    }

    handleSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return (
                <button className="ui red google button">
                    <Spinner size="sm" color="light"/>
                </button>
            );
        } else if (this.state.isSignedIn) {
            return(
                <button className="ui red google button" onClick={this.handleSignOut}>
                    <i className="google icon"/> Sign Out
                </button>
            );
        } else {
            return(
                <button className="ui red google button" onClick={this.handleSignIn}>
                    <i className="google icon"/> Sign In
                </button>
            );
        }
    }

    render() {

        return(
            <>{this.renderAuthButton()}</>
        );
    }
}

export default GoogleAuth