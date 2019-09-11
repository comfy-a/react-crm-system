import React from "react";
import Button from '@material-ui/core/Button';
import CustomerList from './CustomerList';
import CustomerAdd from "./CustomerAdd";
import { Grid } from "@material-ui/core";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            opened: false,
            customer: null
        }

        this.customerList = React.createRef();
        this.stateRefresh = this.stateRefresh.bind(this);
        this.handleSelectCustomer = this.handleSelectCustomer.bind(this);
    }

    stateRefresh() {
        this.setState({
            opened: false,
            customer: null
        });
        this.customerList.current.getCustomerList();
    }

    handleSelectCustomer(customer) {
        this.setState({
            opened: true,
            customer: customer
        });        
    }

    addCustomer = () => {
        this.setState({
            opened: true,
            customer: null
        });
    }

    render() {
        return (
            <React.Fragment>
                <Grid container>

                    {!this.state.opened &&
                        <Button variant="contained" color="primary" onClick={this.addCustomer}>고객 추가</Button>
                    }

                    <Grid item xs={this.state.opened ? 6 : 12}>
                        <CustomerList ref={this.customerList} handleSelectCustomer={this.handleSelectCustomer} />
                    </Grid>

                    {this.state.opened &&
                        <Grid item xs={6}>
                            <CustomerAdd customer={this.state.customer} stateRefresh={this.stateRefresh} />
                        </Grid>
                    }

                </Grid>
            </React.Fragment>
        );
    }
}

export default Home;