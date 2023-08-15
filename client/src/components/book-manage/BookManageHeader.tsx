import { LinkBack } from '../inputs'
import { ROUTE } from '../../consts'
import { useLocation } from 'react-router-dom'

const BookManageHeader = () => {
    const { pathname } = useLocation()

    return (
        <div className="relative w-full py-20 px-8 flex items-center ">
            <LinkBack to={ROUTE.COLLECTION_ABSOLUTE} className=" text-sm">
                Back to my collection
            </LinkBack>
            {pathname.split('/')[4] === 'create-book' ?
                <div className="absolute w-max right-0 left-0 ml-auto mr-auto uppercase font-medium">
                    create book
                </div>
                :
                <div className="absolute w-max right-0 left-0 ml-auto mr-auto uppercase font-medium">
                    edit book
                </div>
            }
        </div>
    )
}

export default BookManageHeader