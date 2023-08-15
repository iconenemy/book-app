import { useGetBooksCountQuery } from "../../features/book/bookApi";

const ProductCounter = () => {
  const { data: booksQty } = useGetBooksCountQuery(null, { refetchOnMountOrArgChange: true })

  return (
    <div className="flex justify-center py-12 text-xs">
      {booksQty} results
    </div>
  );
};

export default ProductCounter;
