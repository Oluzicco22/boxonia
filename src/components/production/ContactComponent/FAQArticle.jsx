import {useState} from "react";
import {PlusIcon} from "lucide-react";

const FAQArticle = ({articles}) => {
    const [openId, setOpenId] = useState(null);

    const toggleOptions = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="flex flex-col gap-5 md:gap-13">
            {articles.map((article, index) => {
                const isOpen = openId === index;

                return (
                    <div
                        key={index}
                        className="w-full rounded-[10px] shadow text-left overflow-hidden border border-[#B7B7B7]"
                    >
                        <button
                            className="w-full flex items-center text-left justify-between py-[15px] md:py-9 px-[14px] md:px-12 text-[#B7B7B7] md:text-xl font-normal"
                            onClick={() => toggleOptions(index)}
                            aria-expanded={isOpen}
                        >
                            {article.question}
                            <PlusIcon
                                size={window.innerWidth < 768 ? 20 : 30}
                                className={`transition-transform duration-500 ease-in-out text-[#B7B7B7]
                                 ${isOpen ? "-rotate-45" : "rotate-0"}
                                 `}
                            />
                        </button>

                        <div className={`
                            transition-all duration-500 ease-in-out overflow-hidden px-[14px] md:px-12 ${isOpen ? "max-h-96 pb-[15px] md:pb-9" : "max-h-0"}
                            `}
                        >
                            {(typeof article.answer === "object") ? (
                                <ul className="list-none space-y-1 text-[#666666]">
                                    <p className="text-sm md:text-base">{article.answer.title}</p>
                                    {article.answer.lists.map((answer, i) => (
                                        <li className="flex text-sm md:text-base gap-2 md:gap-1" key={i}>
                                            <span>-</span>
                                            <span>{answer}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-[#666666] text-sm md:text-base leading-normal w-full md:w-[85%]">{article.answer}</p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FAQArticle;
