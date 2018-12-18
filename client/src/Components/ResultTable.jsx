import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const ResultTable = (props) => {
    return (
        <Paper style={{margin: '50px 10%'}}>
            <Table>
                <TableHead>
                    <TableRow style={{backgroundColor: 'purple'}}>
                        <TableCell style={{color: 'white'}}>Sales_DOC</TableCell>
                        <TableCell  style={{color: 'white'}}>Material</TableCell>
                        <TableCell  style={{color: 'white'}}>OrderQTY(S520)</TableCell>
                        <TableCell  style={{color: 'white'}}>ConfirmQTY(S520)</TableCell>
                        <TableCell  style={{color: 'white'}}>OrderQTY(Order)</TableCell>
                        <TableCell  style={{color: 'white'}}>ConfirmQTY(Order)</TableCell>
                        <TableCell  style={{color: 'white'}}>S520-Order(ConfirmQTY)</TableCell>
                        <TableCell  style={{color: 'white'}}>S520-Order(OrderQTY)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>


                            <TableRow>
                                <TableCell component="th" scope="row">
1234567
                                </TableCell>
                                <TableCell numeric>14246NXK</TableCell>
                                <TableCell numeric>100</TableCell>
                                <TableCell numeric>100</TableCell>
                                <TableCell numeric>100</TableCell>
                                <TableCell numeric>100</TableCell>
                                <TableCell numeric>0</TableCell>
                                <TableCell numeric>0</TableCell>
                            </TableRow>

                </TableBody>
            </Table>
        </Paper>
    )
}

export default ResultTable;