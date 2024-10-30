import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/';

// const Header = () => <h2>Header</h2>;
import Header from './Header.js';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;



async function sendData() {
    // try {
    //     const response = await fetch('localhost:5000/api/test', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ exampleInput: 'Your data here' }) // Data to send
    //     });

    //     if (!response.ok) {
    //         throw new Error('Network response was not ok ' + response.statusText);
    //     }

    //     const data = await response.json(); // Parse JSON response
    //     console.log('Success:', data);
    // } catch (error) {
    //     console.error('Error:', error);
    // }
}

// Call the function to send data
sendData();


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        // this.props.getTest();
        // sendData();
    }

    // handleGetTest = () => {
    //     this.props.getTest();
    // };

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact={true} path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route exact path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);