const ArticleHeader = ({ title }) => {
    return (
        <div className="gloock flex items-center w-full max-w-5xl px-4 text-gray-400 text-sm mx-auto">
            <div className="h-[2px] flex-grow bg-gray-600"></div>
            <p className="px-12 text-xl md:text-3xl font-medium text-center capitalize text-white whitespace-nowrap">
                {title}
            </p>
            <div className="h-[2px] flex-grow bg-gray-600"></div>
        </div>
    );
};

export default ArticleHeader;
