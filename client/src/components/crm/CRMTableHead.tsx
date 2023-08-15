import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { tableHeader } from '../../consts';
import TableHead from '@mui/material/TableHead';
import { styled } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
}));

const CRMTableHead = () => {
    return (
        <TableHead>
            <TableRow className='bg-black'>
                {tableHeader.map(({ id, table_name }) =>
                    <StyledTableCell key={id} align='center' className='text-white'>{table_name}</StyledTableCell>
                )}
            </TableRow>
        </TableHead>
    )
}

export default CRMTableHead