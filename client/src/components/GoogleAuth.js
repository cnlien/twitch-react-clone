import React from 'react'
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    // state = {
    //     isSignedIn: null,
    // }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '65985413382-v5kj9mnogo6umn7t8jrprrquun3jvj7q.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        return (isSignedIn) ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();
    };

    handleSignIn = () => {
        this.auth.signIn();
    }

    handleSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <button className="ui red google button">
                    <Spinner size="sm" color="light"/>
                </button>
            );
        } else if (this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);