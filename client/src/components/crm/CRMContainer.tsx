import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const CRMContainer = ({ children }: Props) => {
    return (
        <div className="max-w-6xl m-auto mt-10">
            {children}
        </div>
    )
}

export default CRMContainer