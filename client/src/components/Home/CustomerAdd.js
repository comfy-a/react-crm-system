import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { useMutation } from "react-apollo-hooks";
import { CUSTOMER_POST } from "../../queries";

const CustomerAdd = (props) => {

    const { value: name, bind: bindName, reset: resetName } = useInput('');
    const { value: age, bind: bindAge, reset: resetAge } = useInput('');
    const { value: gender, bind: bindGender, reset: resetGender } = useInput('');
    const [postCustomer] = useMutation(CUSTOMER_POST, {
        variables: {
            name,
            age: Number(age),
            gender
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validation()) return;

        postCustomer().then(
            result => {
                console.log("success");
                resetFormValue();
                props.stateRefresh();
            },
            error => {
                console.error("error");
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
                <br />
                이름: <input type="text" name="name" {...bindName} />
                <br />
                나이: <input type="number" name="age" min="1" {...bindAge} />
                <br />
                성별: <input type="text" name="gender" {...bindGender} />
                <br /><br />
                <Button variant="contained" onClick={cancel} >취소</Button>
                <Button type="submit" variant="contained" color="primary">저장</Button>
            </form>
        </React.Fragment>
    );
};

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    };
};

export default CustomerAdd;