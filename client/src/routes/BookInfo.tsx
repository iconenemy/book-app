import { useParams } from "react-router-dom"

import { useGetBookByIdQuery } from "../features/auth/authApiSlice"
import { BookItemImage, BookItemContainer, BookItemDetailsContainer, BookItemInfoPanel, BookItemAuthorInfo, BookItemDescriptionInfo, BookItemOwnerInfo } from "../components/book-item"
import BookItemCountPageInfo from "../components/book-item/BookItemCountPageInfo"

type Params = {
  id: string
}
const BookInfo = () => {
  const { id } = useParams<Params>()
  const { data: book } = useGetBookByIdQuery(atob(id as string))
  
  return (
    <>
      {book &&
        <BookItemContainer>
          <BookItemImage title={book.title} />
          <BookItemDetailsContainer>
            <BookItemInfoPanel book={book} />
            <BookItemAuthorInfo author={book.author} />
            <BookItemOwnerInfo owner={book.owner} />
            <BookItemCountPageInfo page_count={book.page_count} />
            <BookItemDescriptionInfo description={book.description} />
          </BookItemDetailsContainer>
        </BookItemContainer>
      }
    </>
  )
}

export default BookInfo