import { Link } from "react-router-dom";
import { useGetAllBooksQuery } from "../features/book/bookApi"
import { ROUTE } from "../consts";

const Library = () => {
  const { data: books } = useGetAllBooksQuery()

  return (
    <div className="w-full flex flex-col justify-center mt-14 mb-16 border-b-2 border-[#ccc]">
      <ul className="flex justify-center flex-wrap gap-1">
        {books?.map(({ id, author, title, section }) =>
          <li key={id} className="flex flex-col">
            <Link to={`${ROUTE.BOOK_INFO_ABSOLUTE}/${btoa(id)}`}>
              <img src={`https://placehold.co/375x500/000000/FFF?text=${title}`} className="w-[275px] h-[300px]" />
              <div className="pt-4 pb-6 px-6 flex flex-col items-center gap-1">
                <div className="pt-1 text-base font-normal">{author}</div>
                <ul className="flex gap-2">
                  {section?.map(({ id, section_name }) =>
                    <li key={id} className="text-xs text-[#6d6464]">{section_name.toLowerCase()}</li>
                  )}
                </ul>
              </div>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
};

export default Library;