import React, { Component } from "react";
import { connect } from 'react-redux';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'null'
            case false:
                return <li><a href="/aut/google"></a></li>;
            default:
                return <li><a>Log out</a></li>
        }
    }

    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Emaily</a>
                    <ul id="nav-mobile" className="right">
                     {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);