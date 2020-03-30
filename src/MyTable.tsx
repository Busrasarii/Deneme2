import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




interface Props {

    rows: Array<{
        id: string;
        productName: string;
        productContent: string;
        productNumber: string;
        category:{} ;
    }>;
}


export function MyTable({ rows }: Props) {
    
    

    return (
        <TableContainer >
            <Table  >
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell >Product Content</TableCell>
                        <TableCell >Product Number</TableCell>
                        <TableCell >Categorys</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell >{row.productName}</TableCell>
                            <TableCell>{row.productContent}</TableCell>
                            <TableCell>{row.productNumber}</TableCell>
                            <TableCell>{row.category}</TableCell>


                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
