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
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell numeric>Calories</TableCell>
                        <TableCell numeric>Fat (g)</TableCell>
                        <TableCell numeric>Carbs (g)</TableCell>
                        <TableCell numeric>Protein (g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>


                            <TableRow>
                                <TableCell component="th" scope="row">

                                </TableCell>
                                <TableCell numeric>1</TableCell>
                                <TableCell numeric>1</TableCell>
                                <TableCell numeric>1</TableCell>
                                <TableCell numeric>1</TableCell>
                            </TableRow>

                </TableBody>
            </Table>
        </Paper>
    )
}

export default ResultTable;