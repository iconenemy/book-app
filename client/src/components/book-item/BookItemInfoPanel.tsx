import { IGetOneBook } from "../../features/book/book.type";

type Props = {
    book: IGetOneBook;
};

const BookItemInfoPanel = ({ book: { title, isbn, section } }: Props) => {
    return (
        <div className="w-full pt-6 pb-4 border-transparent border-b-[#ccc] border-[1px] ">
            <ul className="mb-8 flex flex-row text-sm gap-2 ">
                {section.map(({ id, section_name }) =>
                    <li key={id}>{section_name}</li>
                )}
            </ul>
            <div className="my-3 text-base font-medium ">{title}</div>
            <div className="pb-2 text-sm">ISBN: {isbn}</div>
        </div>
    );
};

export default BookItemInfoPanel;