import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const BookItemDetailContainer = ({ children }: Props) => {
    return (
        <div className="h-full w-1/2">
            <div className="sticky top-52 pb-36 px-10 flex flex-col">{children}</div>
        </div>
    );
};

export default BookItemDetailContainer;