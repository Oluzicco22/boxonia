import {XCircle} from "lucide-react";
import {useState} from "react";

const TalentBookingModal = ({onClose, name}) => {
    const [type, setType] = useState(null);
    const [platform, setPlatform] = useState(null);

    const [form, setForm] = useState({
        synopsis: '',
        duration: '',
        payment: '',
        fullName: '',
        email: ''
    });

    const handleSubmit = () => {
        const bookingData = {type, platform, ...form};
        console.log("Booking Data:", bookingData);
        // TODO: send bookingData to API
        onClose();
    };

    const isDisabled =
        !type ||
        !platform ||
        !form.synopsis.trim() ||
        !form.duration.trim() ||
        !form.payment.trim() ||
        !form.fullName.trim() ||
        !form.email.trim();

    return (
        <div
            className="w-[95%] md:w-4/5 mt-60 bg-neutral-700 rounded-[30px] h-fit px-5 md:px-10 py-4 md:py-9 flex flex-col gap-7 md:gap-14">
            <div className="w-full flex justify-end">
                <button
                    onClick={onClose}
                    className="cursor-pointer"
                    aria-label="Close modal"
                >
                    <XCircle className="w-12 h-12 transition-colors duration-200 fill-neutral-400 text-neutral-700"/>
                </button>
            </div>

            <div className="flex flex-col gap-12 pb-12 md:pb-0">
                {/* Project Type */}
                <div className="w-full min-h-30 flex justify-center items-center border border-white relative py-6">
                    <p className="text-white text-xs md:text-xl font-bold absolute bg-black md:px-3 px-4 -top-4 md:-top-7 left-1/2 -translate-x-1/2 md:w-52 flex justify-center py-2 md:py-3">
                        Project type:
                    </p>
                    <div className="flex justify-evenly flex-wrap w-full items-center gap-3">
                        {['feature film', 'short film', 'ad commercial', 'music video', 'brand influencing', 'others'].map((item, i) =>
                            <button
                                type="button"
                                aria-pressed={type === item}
                                onClick={() => {
                                    type === item ? setType(null) : setType(item)
                                }}
                                role="button"
                                tabIndex={0}
                                className={`
                                ${type === item ? 'bg-black rounded-xl ' : ' '}
                                text-white whitespace-nowrap capitalize font-medium cursor-pointer text-xs md:text-lg 
                                ${type !== item ? 'hover:text-blue-200 hover:border hover:border-blue-200 hover:rounded-md ' : ' '} px-5 py-2 md:py-1`}
                                key={i}>
                                {item}
                            </button>
                        )}
                    </div>
                </div>

                {/* Platform */}
                <div
                    className="w-full md:w-8/12 mx-auto min-h-30 flex justify-center items-center border border-white relative py-6">
                    <p className="text-white text-xs md:text-xl font-bold absolute bg-black md:px-3 px-4 -top-4 md:-top-7 left-1/2 -translate-x-1/2 md:w-52 flex justify-center py-2 md:py-3">
                        Platform
                    </p>
                    <div className="flex flex-wrap md:flex-nowrap justify-evenly md:justify-between w-full md:w-10/11">
                        {['cinema', 'netflix', 'amazon', 'youtube'].map((item, i) =>
                            <button
                                type="button"
                                aria-pressed={platform === item}
                                onClick={() => {
                                    platform === item ? setPlatform(null) : setPlatform(item)
                                }}
                                role="button"
                                tabIndex={0}
                                className={`${platform === item ? 'bg-black rounded-xl ' : ' '}
                                text-white whitespace-nowrap capitalize font-medium cursor-pointer text-xs md:text-lg 
                                ${platform !== item ? 'hover:text-blue-200 hover:border hover:border-blue-200 hover:rounded-md ' : ' '} px-5 py-2 md:py-1`}
                                key={i}>
                                {item}
                            </button>
                        )}
                    </div>
                </div>

                {/* Form Fields */}
                <div className="w-full md:w-10/12 mx-auto flex gap-7 flex-col items-center">
                    {/* Full Name */}
                    <div className="w-full space-y-1">
                        <label className="flex md:hidden text-[#7f7f7f] text-sm whitespace-nowrap">Full Name:</label>
                        <div className="w-full flex gap-1 bg-white text-black rounded-[10px] md:rounded-md p-4">
                            <label className="hidden md:flex text-lg font-medium whitespace-nowrap">Full Name:</label>
                            <input
                                type="text"
                                value={form.fullName}
                                onChange={(e) => setForm({...form, fullName: e.target.value})}
                                className="w-full rounded-md focus-visible:outline-none"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="w-full space-y-1">
                        <label className="flex md:hidden text-[#7f7f7f] text-sm whitespace-nowrap">Email:</label>
                        <div className="w-full flex gap-1 bg-white text-black rounded-[10px] md:rounded-md p-4">
                            <label className="hidden md:flex text-lg font-medium whitespace-nowrap">Email:</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({...form, email: e.target.value})}
                                className="w-full rounded-md focus-visible:outline-none"
                            />
                        </div>
                    </div>

                    {/* Synopsis */}
                    <div className="w-full space-y-1">
                        <label className="flex md:hidden text-[#7f7f7f] text-sm whitespace-nowrap">Project
                            Synopsis/Information:</label>
                        <div
                            className="w-full flex flex-col gap-1 bg-white text-black rounded-[10px] md:rounded-md p-4">
                            <label className="hidden md:flex text-lg font-medium">Project Synopsis/Information:</label>
                            <textarea
                                rows="3"
                                value={form.synopsis}
                                onChange={(e) => setForm({...form, synopsis: e.target.value})}
                                className="w-full rounded-md focus-visible:outline-none resize-none"
                            ></textarea>
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="w-full space-y-1">
                        <label className="flex md:hidden text-[#7f7f7f] text-sm whitespace-nowrap">Project
                            Duration:</label>
                        <div className="w-full flex gap-1 bg-white text-black rounded-[10px] md:rounded-md p-4">
                            <label className="hidden md:flex text-lg font-medium whitespace-nowrap">Project
                                Duration:</label>
                            <input
                                value={form.duration}
                                onChange={(e) => setForm({...form, duration: e.target.value})}
                                type="text"
                                className="w-full rounded-md focus-visible:outline-none"
                            />
                        </div>
                    </div>

                    {/* Payment */}
                    <div className="w-full space-y-1">
                        <label className="flex md:hidden text-[#7f7f7f] text-sm whitespace-nowrap">Payment
                            Offer:</label>
                        <div className="w-full flex gap-1 bg-white text-black rounded-[10px] md:rounded-md p-4">
                            <label className="hidden md:flex text-lg font-medium whitespace-nowrap">Payment
                                Offer:</label>
                            <input
                                type="text"
                                value={form.payment}
                                onChange={(e) => setForm({...form, payment: e.target.value})}
                                className="w-full rounded-md focus-visible:outline-none"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={isDisabled}
                        className={`my-6 rounded-[10px] text-xs md:text-base py-2 px-7 md:px-20 w-fit border ${isDisabled
                            ? "cursor-not-allowed"
                            : "bg-transparent border-[#989898] hover:text-black hover:bg-white cursor-pointer text-[#989898]"
                        }`}
                    >
                        {`Book ${name}`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TalentBookingModal;
