const ArticleHeader = ({ title, id = '' }) => {
    return (
        <div id={id} className="header-font flex items-center px-4 text-sm w-full mx-auto">
            <div className="h-[2px] flex-grow bg-[#4D4D4D]"></div>
            <p className="mx-5 md:mx-20 text-2xl md:text-5xl font-normal text-center capitalize text-[#525252] whitespace-nowrap">
                {title}
            </p>
            <div className="h-[2px] flex-grow bg-[#4D4D4D]"></div>
        </div>
    );
};

export default ArticleHeader;
