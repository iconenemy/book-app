import { ReactNode } from "react"

import Table from "@mui/material/Table"

type Props = {
    children: ReactNode
}

const CRMTable = ({ children }: Props) => {
    return (
        <Table aria-label="customized table" >
            {children}
        </Table>
    )
}

export default CRMTable