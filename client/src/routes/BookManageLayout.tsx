import { Outlet } from "react-router-dom";
import {
    BookManageContainer,
    BookManageFormContainer,
    BookManageHeader,
    BookManageInfoPanel
} from '../components/book-manage';
import { useAppSelector } from "../app/hooks";
import { NotFound } from ".";

const BookManageLayout = () => {
    const { is_auth } = useAppSelector(state => state.persistedReducer.auth)
    if (!is_auth) return <NotFound />

    return (
        <>
            <BookManageHeader />
            <BookManageContainer>
                <BookManageInfoPanel />
                <BookManageFormContainer>
                    <Outlet />
                </BookManageFormContainer>
            </BookManageContainer >
        </>
    );
}

export default BookManageLayout