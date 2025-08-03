const ArticleHeader = ({ title }) => {
    return (
        <div className="header-font flex items-center w-full max-w-5xl px-4 text-sm mx-auto">
            <div className="h-[2px] flex-grow bg-[#4D4D4D]"></div>
            <p className="mx-20 text-2xl md:text-5xl font-normal text-center capitalize text-[#525252] whitespace-nowrap">
                {title}
            </p>
            <div className="h-[2px] flex-grow bg-[#4D4D4D]"></div>
        </div>
    );
};

export default ArticleHeader;
