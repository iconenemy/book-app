import { useState } from 'react'
import { BsArrowBarUp, BsArrowBarDown } from 'react-icons/bs'

import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { IGetAllUsers } from '../../../features/user/userType';
import CRMCollapse from '../CRMCollapse';

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

type Props = {
    user: IGetAllUsers
}

const AdminTableRow = ({ user: { id, email, first_name, last_name, role, collection } }: Props) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <StyledTableRow key={id}>
                <StyledTableCell align="center"><IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <BsArrowBarUp /> : <BsArrowBarDown />}
                </IconButton></StyledTableCell>
                <StyledTableCell align="center">{email}</StyledTableCell>
                <StyledTableCell align="center">{first_name}</StyledTableCell>
                <StyledTableCell align="center">{last_name}</StyledTableCell>
                <StyledTableCell align="center">{role}</StyledTableCell>
            </StyledTableRow>
            <CRMCollapse open={open} section={collection} />
        </>
    )
}

export default AdminTableRow