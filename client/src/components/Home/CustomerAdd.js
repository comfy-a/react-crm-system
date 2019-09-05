import React from 'react'
import Button from '@material-ui/core/Button';

class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            gender: ''
        }
        console.log(props);
        this.stateRefresh.bind(this);

        this.handleValueChange = this.handleValueChange.bind(this);
        this.addCustomer = this.addCustomer.bind(this);
    }

    stateRefresh() {
        this.setState({
            name: '',
            age: '',
            gender: ''
        });
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer() {
        console.log('name', this.state.name);
        console.log('age', this.state.age);
        console.log('gender', this.state.gender);
    }

    cancel() {
        this.stateRefresh();
        this.props.stateRefresh();
    }

    save() {
        this.addCustomer();
    }

    render() {

        return (
            <React.Fragment>
                {this.props.opened &&
                    <form onSubmit={this.handleFormSubmit}>
                        <br />
                        이름: <input type="text" name="name" value={this.state.name} onChange={this.handleValueChange} /><br />
                        나이: <input type="text" name="age" value={this.state.age} onChange={this.handleValueChange} /><br />
                        성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br /><br />

                        <Button variant="contained"onClick={this.cancel.bind(this)} >취소</Button>
                        <Button variant="contained" color="primary" onClick={this.save.bind(this)}>저장</Button>
                    </form>
                }
            </React.Fragment>
        )
    }
}

export default CustomerAdd
