type Props = {
    description: string
}

const BookItemDescriptionInfo = ({ description }: Props) => {
    return (
        <div className="flex flex-col">
            <h2 className="relative text-sm font-medium">
                BOOK DETAILS
            </h2>
            <ul className="mt-10 flex flex-col gap-2">
                {description.split(".").map((item, idx) => (
                    <li key={idx} className="text-sm font-normal">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookItemDescriptionInfo