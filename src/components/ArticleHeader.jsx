const ArticleHeader = ({title}) => {
    return (
        <div className="flex items-center gap-12 md:gap-40 text-gray-400 text-sm w-[90%] md:w-2/3">
            <div className="h-[2px] flex-grow bg-gray-600"></div>
            <p className="text-3xl capitalize">{title}</p>
            <div className="h-[2px] flex-grow bg-gray-600"></div>
        </div>
    )
}

export default ArticleHeader
