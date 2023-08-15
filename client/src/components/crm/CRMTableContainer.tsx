import { ReactNode } from 'react'

import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper';

type Props = {
    children: ReactNode
}

const CRMTableContainer = ({ children }: Props) => {
    return (
        <TableContainer component={Paper} className='w-full'>
            {children}
        </TableContainer>
    )
}

export default CRMTableContainer