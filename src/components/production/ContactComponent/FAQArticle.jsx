import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

const FAQArticle = ({ articles }) => {
    const [openId, setOpenId] = useState(null);

    const toggleOptions = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="flex flex-col gap-4">
            {articles.map((article, index) => {
                const isOpen = openId === index;

                return (
                    <div
                        key={index}
                        className="w-full bg-white rounded-2xl shadow text-left overflow-hidden"
                    >
                        <button
                            className="w-full flex items-center justify-between py-8 px-10 text-black font-semibold text-xl"
                            onClick={() => toggleOptions(index)}
                            aria-expanded={isOpen}
                        >
                            {article.question}
                            <PiCaretDownBold
                                className={`transition-transform duration-500 ease-in-out
                                 w-7 h-7 border-2 border-gray-900 rounded-full 
                                 ${isOpen ? "-rotate-180" : "rotate-0"}
                                 `}
                            />
                        </button>

                        <div
                            className={`
                            transition-all duration-500 ease-in-out 
                            overflow-hidden border-t border-gray-400 px-10 
                            ${isOpen ? "max-h-96 py-6" : "max-h-0"}
                            `}
                        >
                            {Array.isArray(article.answer) ? (
                                <ul className="list-disc space-y-2 pl-5 text-black capitalize">
                                    {article.answer.map((answer, i) => (
                                        <li key={i}>{answer}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-black">{article.answer}</p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FAQArticle;
