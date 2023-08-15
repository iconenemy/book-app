import { Box, Collapse, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { bookHeader } from '../../consts'
import { IBook } from '../../features/book/book.type'

type Props = {
    open: boolean
    section: IBook[]
}

const CRMCollapse = ({ open, section }: Props) => {
    return (
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Collection books
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    {bookHeader.map(({ id, headerName }) =>
                                        <TableCell key={id} align="center">
                                            {headerName}
                                        </TableCell>
                                    )}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {section.map(({ id, author, title, page_count, isbn }) => (
                                    <TableRow key={id}>
                                        <TableCell key={id} component="th" align="center" scope="row"> 
                                            {title}
                                        </TableCell>
                                        <TableCell key={id} component="th" align="center" scope="row">
                                            {author}
                                        </TableCell>
                                        <TableCell key={id} component="th" align="center" scope="row">
                                            {page_count}
                                        </TableCell>
                                        <TableCell key={id} component="th" align="center" scope="row">
                                            {isbn}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    )
}

export default CRMCollapse