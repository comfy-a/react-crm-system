import React from "react";

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile customer={this.props.customer} />
                <CustomerInfo customer={this.props.customer} />
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.customer.image} alt="profile" />
                <h2>{this.props.customer.name}({this.props.customer.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.customer.gender}</p>
                <p>{this.props.customer.job}</p>
            </div>
        )
    }
}

export default Customer;