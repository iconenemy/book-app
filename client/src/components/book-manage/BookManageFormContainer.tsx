import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const BookManageFormContainer = ({ children }: Props) => {
    return (
        <div className="w-5/12 flex flex-col">
            {children}
        </div>
    )
}

export default BookManageFormContainer