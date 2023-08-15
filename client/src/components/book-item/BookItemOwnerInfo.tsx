import { IUser } from "../../features/auth/authType"

type Props = {
    owner: IUser
}

const BookItemOwnerInfo = ({ owner }: Props) => {
    return (
        <div className="w-full pt-6 mb-5 gap-2 flex flex-row items-cente">
            <h2 className="text-sm font-medium flex">Owner:</h2>
            <div className="text-sm">
                {owner.first_name}
            </div>
            <div className="text-sm">
                {owner.last_name}
            </div>
        </div>
    )
}

export default BookItemOwnerInfo