import {XCircle} from "lucide-react";
import {useState} from "react";

const TalentBookingModal = ({onClose}) => {
    const [type, setType] = useState(null);
    const [platform, setPlatform] = useState(null);

    const [form, setForm] = useState({
        synopsis: '',
        duration: '',
        payment: ''
    });


    return (
        <div className="w-4/5 bg-neutral-700 rounded-2xl px-10 py-9 flex flex-col gap-14">
            <div className="w-full flex justify-end">
                <button
                    onClick={onClose}
                    className="cursor-pointer"
                    aria-label="Close modal"
                >
                    <XCircle className="w-12 h-12 transition-colors duration-200 fill-neutral-400 text-neutral-700" />
                </button>

            </div>
            <div className="flex flex-col gap-10">
                <div className="w-full h-30 flex justify-center items-center border border-white relative">
                        <p className="text-white text-xl font-bold absolute bg-black px-3 -top-7 left-1/2 -translate-x-1/2 w-52 flex justify-center py-3">
                            Project type:
                        </p>
                    <div className="flex justify-evenly w-full items-center gap-3">
                        {['feature film', 'short film', 'ad commercial', 'music video', 'brand influencing', 'others'].map((item, i) =>
                            <p
                                onClick={() => {type === item ? setType(null) : setType(item)}}
                                role="button"
                                tabIndex={0}
                                className={`
                                ${type === item ? 'bg-black rounded-xl ' : ' '}
                                text-white whitespace-nowrap capitalize font-medium cursor-pointer text-lg 
                                ${type !== item ? 'hover:text-blue-200 hover:border hover:border-blue-200 hover:rounded-md ' : ' '} px-5 py-1`}
                                key={i}>
                                {item}
                            </p>
                        )}
                    </div>
                </div>

                <div className="w-8/12 mx-auto h-30 flex justify-center items-center border border-white relative">
                    <p className="text-white text-xl font-bold absolute bg-black px-3 -top-7 left-1/2 -translate-x-1/2 w-52 flex justify-center py-3">
                        Platform</p>
                    <div className="flex justify-between w-10/11">
                        {['cinema', 'netflix', 'amazon', 'youtube'].map((item, i) =>
                            <p
                                onClick={() => {platform === item ? setPlatform(null) : setPlatform(item)}}
                                role="button"
                                tabIndex={0}
                                className={`
                                ${platform === item ? 'bg-black rounded-xl ' : ' '}
                                text-white whitespace-nowrap capitalize font-medium cursor-pointer text-lg 
                                ${platform !== item ? 'hover:text-blue-200 hover:border hover:border-blue-200 hover:rounded-md ' : ' '} px-5 py-1`}
                                key={i}>
                                {item}
                            </p>
                        )}
                    </div>
                </div>

                <div className="w-10/12 mx-auto flex gap-7 flex-col items-center">
                    <div className="w-full flex flex-col gap-1 bg-white text-black rounded-md p-4">
                        <label className="text-lg font-medium">Project Synopsis/Information:</label>
                        <textarea rows="3" className="w-full rounded-md focus-visible:outline-none resize-none"></textarea>
                    </div>

                    <div className="w-full flex gap-1 bg-white text-black rounded-md p-4">
                        <label className="text-lg font-medium whitespace-nowrap">Project Duration:</label>
                        <input type="text" className="w-full rounded-md focus-visible:outline-none" />
                    </div>

                    <div className="w-full flex gap-1 bg-white text-black rounded-md p-4">
                        <label className="text-lg font-medium whitespace-nowrap">Payment Offer:</label>
                        <input type="text" className="w-full rounded-md focus-visible:outline-none" />
                    </div>
                    <button className="text-white my-6 hover:text-black hover:bg-white rounded-md py-2 px-20 bg-transparent border border-white w-fit">book taye</button>
                </div>
            </div>
        </div>
    )
}

export default TalentBookingModal;
