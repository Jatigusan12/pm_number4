import React, { Component } from 'react';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <center>
                <div><h1><i>Name: </i>{this.props.fname} {this.props.lname}</h1></div>
                <div><h3><i>address: </i>{this.props.address}</h3></div>
                <div><h3><i>Email: </i>{this.props.email}</h3></div>
                <div><h3><i>Phone Number:</i>{this.props.pnumber}</h3></div>
                </center>
            </div>
        )
    }
}

export default Dashboard;