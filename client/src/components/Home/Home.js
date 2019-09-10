import React from "react";
import Button from '@material-ui/core/Button';
import CustomerList from './CustomerList';
import CustomerAdd from "./CustomerAdd";
import { Grid } from "@material-ui/core";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            opened: false
        }

        this.customerList = React.createRef();
        this.stateRefresh = this.stateRefresh.bind(this);
    }

    stateRefresh() {
        this.setState({
            opened: false
        });
        this.customerList.current.getCustomerList();
    }

    addCustomer = () => {
        this.setState({
            opened: true
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
                        <CustomerList ref={this.customerList} />
                    </Grid>

                    {this.state.opened &&
                        <Grid item xs={6}>
                            <CustomerAdd stateRefresh={this.stateRefresh} />
                        </Grid>
                    }

                </Grid>
            </React.Fragment>
        );
    }
}

export default Home;