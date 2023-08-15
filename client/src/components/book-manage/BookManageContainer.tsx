import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const BookManageContainer = ({ children }: Props) => {
    return (
        <div className="w-full py-12 px-8 flex flex-row border-b-[#ccc] border-[1px]">
            {children}
        </div >
    )
}

export default BookManageContainer