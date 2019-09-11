import React, { useState, useEffect } from "react";
import { useMutation } from "react-apollo-hooks";
import { CUSTOMER_POST, CUSTOMER_DELETE } from "../../queries";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
        width: "100px"
    }
}));

const CustomerAdd = (props) => {

    const classes = useStyles();
    const { value: name, setValue: setName, bind: bindName, reset: resetName } = useInput('');
    const { value: age, setValue: setAge, bind: bindAge, reset: resetAge } = useInput('');
    const { value: gender, setValue: setGender, bind: bindGender, reset: resetGender } = useInput('');

    const [postCustomer] = useMutation(CUSTOMER_POST, {
        variables: {
            name,
            age: age,
            gender
        }
    });
    const [deleteCustomer] = useMutation(CUSTOMER_DELETE, {
        variables: {
            id: props.customer !== null ? props.customer.id : null
        }
    });

    useEffect(() => {
        if (props.customer !== null) {
            setName(props.customer.name);
            setAge(props.customer.age);
            setGender(props.customer.gender);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validation()) return;

        if (props.customer === null) {
            postCustomer().then(
                result => {
                    resetFormValue();
                    props.stateRefresh();
                },
                error => {
                    console.error(error);
                }
            );
        } else {
            
        }
    }

    const handleDeleteEvent = () => {
        deleteCustomer().then(
            result => {
                console.log(result);
                props.stateRefresh();
            },
            error => {
                console.error(error);
            }
        );
    }

    const validation = () => {
        if (name === '' || age === '' || gender === '') {
            alert("Invalid form");
            return false;
        }

        return true;
    }

    const resetFormValue = () => {
        resetName();
        resetAge();
        resetGender();
    }

    const cancel = () => {
        props.stateRefresh();
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                <TextField
                    label="Name"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    {...bindName}
                />
                <br />
                <TextField
                    label="Age"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    {...bindAge}
                />
                <br />
                <TextField
                    label="Gender"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    {...bindGender}
                />
                <br /><br />
                <Button variant="contained" className={classes.button} onClick={cancel}>취소</Button>
                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                    {props.customer !== null && "수정"}
                    {props.customer === null && "저장"}
                </Button>
                {props.customer !== null &&
                    <Button variant="contained" color="secondary" className={classes.button} onClick={handleDeleteEvent}>삭제</Button>
                }
            </form>
        </React.Fragment>
    );
};

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    };
};

export default CustomerAdd;