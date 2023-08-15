type Props = {
    author: string
}

const BookItemAuthorInfo = ({ author }: Props) => {
    return (
        <div className="w-full pt-6 mb-5 gap-2 flex flex-row items-cente">
            <h2 className="text-sm font-medium">Author:</h2>
            <div className="text-sm">
                {author}
            </div>
        </div>
    )
}

export default BookItemAuthorInfo