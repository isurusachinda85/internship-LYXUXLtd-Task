import {Component} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(Sno, Products, Price) {
    return { Sno, Products, Price};
}

const rows = [
    createData("1", "Apple Ear pods", "$456"),
    createData("2", "iPhone11", "$658"),
    createData("3", "Samsung", "$200" ),
];

export class CommonTable extends Component {
    render() {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sno</TableCell>
                            <TableCell align="right">Products</TableCell>
                            <TableCell align="right">Price</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.NIC}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.Sno}</TableCell>
                                <TableCell align="right">{row.Products}</TableCell>
                                <TableCell align="right">{row.Price}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        )
    }
}