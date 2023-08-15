import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const BookItemContainer = ({ children }: Props) => {
    return <div className="w-full flex">{children}</div>;
};

export default BookItemContainer;