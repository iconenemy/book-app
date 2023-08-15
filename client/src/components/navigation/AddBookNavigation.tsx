import { RiAddCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ROUTE } from "../../consts";

const AddBookNavigation = () => {
  return (
    <div className='fixed bottom-56 right-9 z-50'>
      <Link to={ROUTE.BOOK_MANAGE_CREATE_ABSOLUTE} className=" w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center">
        <RiAddCircleFill size={'40px'} />
      </Link>
    </div >
  )
}

export default AddBookNavigation