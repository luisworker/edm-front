
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default function CustomerTable({rows, handleSelect} ) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Nome do cliente</StyledTableCell>
                        <StyledTableCell align="right">Marca do contador</StyledTableCell>
                        <StyledTableCell align="right">SPN</StyledTableCell>
                        <StyledTableCell align="right">Conta</StyledTableCell>
                        <StyledTableCell align="right">Tarifa</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((item) => (
                        <StyledTableRow key={item.meterSerial} onClick={(e) => {
                            handleSelect(e,item)
                        }}>
                            <StyledTableCell component="th" scope="row">
                                {item.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{item.meterSerial}</StyledTableCell>
                            <StyledTableCell align="right">{item.indicatorPrePostAccount}</StyledTableCell>
                            <StyledTableCell align="right">{item.account}</StyledTableCell>
                            <StyledTableCell align="right">{item.tariffDescription}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
