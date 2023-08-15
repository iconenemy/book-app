import TableBody from "@mui/material/TableBody"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const CRMTableBody = ({ children }: Props) => {
    return (
        <TableBody>{children}</TableBody>
    )
}

export default CRMTableBody