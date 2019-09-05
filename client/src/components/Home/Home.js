import React from "react";
import Button from '@material-ui/core/Button';
import CustomerList from './CustomerList';
import CustomerAdd from "./CustomerAdd";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            opened: false
        }

        this.stateRefresh = this.stateRefresh.bind(this);
    }

    stateRefresh() {
        this.setState({
            opened: false
        })
    }

    addCustomer = () => {
        this.setState({
            opened: true
        });
    }

    render() {
        return (
            <React.Fragment>

                <Button variant="contained" color="primary" onClick={this.addCustomer}>고객 추가</Button>

                <CustomerAdd opened={this.state.opened} stateRefresh={this.stateRefresh} />

                <CustomerList />

            </React.Fragment>
        );
    }
}

export default Home;