import { useState } from "react";
import { PiCaretDownThin } from "react-icons/pi";

const FAQArticle = ({ articles }) => {
    const [seeAnswer, setSeeAnswer] = useState(null);

    const toggleOptions = (id) => {
        setSeeAnswer(prevId => (prevId === id ? null : id));
    }

    return articles.map((article, index) => {
        const isOpen = seeAnswer === index;

        return (
            <button
                key={index}
                className="w-full bg-white rounded-lg p-5 shadow text-left"
                onClick={() => toggleOptions(index)}
            >
                <p className="flex items-center justify-between text-black font-semibold text-lg">
                    {article.question}
                    <PiCaretDownThin
                        className={`
                            transition-transform duration-500 ease-in-out
                            w-6 h-6 border border-gray-900 rounded-full
                            ${isOpen ? '-rotate-180' : 'rotate-0'}
                        `}
                    />
                </p>
                <span className={`${isOpen ? 'inline-block' : 'hidden'} mt-4 text-left font-medium text-black border-t pt-6 border-gray-400 w-full`}>
                    {article.answer}
                </span>
            </button>
        );
    });
};

export default FAQArticle;
