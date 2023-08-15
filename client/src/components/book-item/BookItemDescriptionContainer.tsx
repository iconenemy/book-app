import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const BookItemDescriptionContainer = ({ children }: Props) => {
    return (
        <div className="h-full">
            <div className="sticky top-52 pb-36 px-10 flex flex-col">{children}</div>
        </div>
    );
};

export default BookItemDescriptionContainer;