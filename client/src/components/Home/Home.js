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
                <Grid container>

                    {!this.state.opened &&
                        <Button variant="contained" color="primary" onClick={this.addCustomer}>고객 추가</Button>
                    }

                    <Grid item xs={this.state.opened ? 6 : 12}>
                        <CustomerList />
                    </Grid>

                    {this.state.opened &&
                        <Grid item xs={6}>
                            {/* <CustomerAdd opened={this.state.opened} stateRefresh={this.stateRefresh} /> */}
                            <CustomerAdd />
                        </Grid>
                    }

                </Grid>
            </React.Fragment>
        );
    }
}

export default Home;