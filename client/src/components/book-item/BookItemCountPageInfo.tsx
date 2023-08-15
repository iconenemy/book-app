type Props = {
  page_count: number
}

const BookItemCountPageInfo = ({ page_count }: Props) => {
  return (
    <div className="w-full pt-6 gap-2 pb-6 mb-5 flex flex-row items-cente  border-transparent border-b-[#ccc] border-[1px]">
      <h2 className="text-sm font-medium">Page count:</h2>
      <div className="text-sm">
        {page_count}
      </div>
    </div>
  )
}

export default BookItemCountPageInfo