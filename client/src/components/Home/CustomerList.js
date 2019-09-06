import React from 'react';
import { useQuery } from "react-apollo-hooks";
import { ALL_CUSTOMER_GET } from "../../queries";
import { RiseLoader } from 'react-spinners';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const CustomerTable = () => {

    const spinnerStyle = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    };

    const { data, error, loading } = useQuery(ALL_CUSTOMER_GET);

    return (
        <div>
            <div style={spinnerStyle}>
                <RiseLoader size={20} color={'#50e3c2'} loading={loading} />
            </div>

            < Table >
                <TableHead>
                    <TableRow>
                        <TableCell>이름</TableCell>
                        <TableCell>나이</TableCell>
                        <TableCell>성별</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!loading && data && data.customers && data.customers.data &&
                        data.customers.data.map(customer => {
                            return <TableRow key={customer.id}>
                                <TableCell>{customer.name}</TableCell>
                                <TableCell>{customer.age}</TableCell>
                                <TableCell>{customer.gender}</TableCell>
                            </TableRow>
                        })
                    }
                    {error && "Error!!!"}
                </TableBody>
            </Table>
        </div>
    );
};

export default CustomerTable