import React from "react";

class Customer extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.customer.name}</h1>
                <p>{this.props.customer.age}</p>
                <p>{this.props.customer.birthday}</p>
                <p>{this.props.customer.gender}</p>                
            </div>
        )
    }
}

export default Customer;