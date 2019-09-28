import React, { Component } from 'react';
import Dashboard from './Dashboard';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            fname: '',
            lname: '',
            address: '',
            email: '',
            pnumber: ''
        }
    }

    handleInputs = (e) => {
        const { fname, lname, address, email, pnumber } = this.state;
        e.preventDefault();
        if (fname !== "" && lname !== "" && address !== "" && email !== "" && pnumber !== "") {
            this.setState({ login: true });
        } else {
            this.setState({ login: false });
            alert("All inputs are required!");
        }
    }



    render() {
        const { fname, lname, address, email, pnumber } = this.state;
        if (!this.state.login) {
            return (
                <center>
                    <div>
                        <div>First Name<br /><input  type="text" placeholder="First Name" onChange={e => this.setState({ fname: e.target.value })} /></div>
                        <div>Last Name:<br /><input  type="text" placeholder="Last Name" onChange={e => this.setState({ lname: e.target.value })} /></div>
                        <div>Address:<br /><input  type="text" placeholder="Address" onChange={e => this.setState({ address: e.target.value })} /></div>
                        <div>Email:<br /><input type="email" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} /></div>
                        <div>Phone Number:<br /><input  type="number" placeholder="Phone Number" onChange={e => this.setState({ pnumber: e.target.value })} /></div>
                        <div><button onClick={e => this.handleInputs(e)}>Submit</button></div>
                    </div>
                </center>

            );

        } else {
            return (
                <div>
                    <Dashboard fname={fname} lname={lname} address={address} email={email} pnumber={pnumber} />
                </div>
            )
        }
    }
}

export default Registration;