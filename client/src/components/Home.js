import React from "react";
import { useQuery } from "react-apollo-hooks";
import { Q_CUSTOMER } from "../queries";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { RiseLoader } from 'react-spinners';
import Customer from './Customer';

const spinnerStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
};

const Home = () => {
    const { data, error, loading } = useQuery(Q_CUSTOMER);

    return (
        <div>
            <div style={spinnerStyle}>
                <RiseLoader size={20} color={'#50e3c2'} loading={loading} />
            </div>

            {!loading && data && data.customers && data.customers.data &&
                < Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>나이</TableCell>
                            <TableCell>성별</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.customers.data.map(customer => <Customer key={customer.id} customer={customer} />)}
                    </TableBody>
                </Table>
            }

            {error && "Error!!!"}
        </div>
    );
};


export default Home;