import { XCircle } from "lucide-react";
import { useState } from "react";

const TalentBookingModal = ({ onClose, name }) => {
    const [type, setType] = useState(null);
    const [platform, setPlatform] = useState(null);

    const [form, setForm] = useState({
        synopsis: '',
        duration: '',
        payment: '',
        fullname: '',
        email: ''
    });

    const handleSubmit = () => {
        const bookingData = { type, platform, ...form };
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
        !form.fullname.trim() ||
        !form.email.trim();

    return (
        <div className="w-[95%] md:w-4/5 bg-neutral-700 rounded-2xl px-10 py-9 flex flex-col gap-14">
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
                {/* Project Type */}
                <div className="w-full min-h-30 flex justify-center items-center border border-white relative py-6">
                    <p className="text-white text-xl font-bold absolute bg-black px-3 -top-7 left-1/2 -translate-x-1/2 w-52 flex justify-center py-3">
                        Project type:
                    </p>
                    <div className="flex justify-evenly flex-wrap w-full items-center gap-3">
                        {['feature film', 'short film', 'ad commercial', 'music video', 'brand influencing', 'others'].map((item, i) =>
                            <button
                                type="button"
                                aria-pressed={type === item}
                                onClick={() => { type === item ? setType(null) : setType(item) }}
                                role="button"
                                tabIndex={0}
                                className={`
                                ${type === item ? 'bg-black rounded-xl ' : ' '}
                                text-white whitespace-nowrap capitalize font-medium cursor-pointer text-lg 
                                ${type !== item ? 'hover:text-blue-200 hover:border hover:border-blue-200 hover:rounded-md ' : ' '} px-5 py-2 md:py-1`}
                                key={i}>
                                {item}
                            </button>
                        )}
                    </div>
                </div>

                {/* Platform */}
                <div className="w-11/12 md:w-8/12 mx-auto min-h-30 flex justify-center items-center border border-white relative py-6">
                    <p className="text-white text-xl font-bold absolute bg-black px-3 -top-7 left-1/2 -translate-x-1/2 w-52 flex justify-center py-3">
                        Platform
                    </p>
                    <div className="flex flex-wrap md:flex-nowrap justify-evenly md:justify-between w-full md:w-10/11">
                        {['cinema', 'netflix', 'amazon', 'youtube'].map((item, i) =>
                            <button
                                type="button"
                                aria-pressed={platform === item}
                                onClick={() => { platform === item ? setPlatform(null) : setPlatform(item) }}
                                role="button"
                                tabIndex={0}
                                className={`${platform === item ? 'bg-black rounded-xl ' : ' '}
                                text-white whitespace-nowrap capitalize font-medium cursor-pointer text-base md:text-lg 
                                ${platform !== item ? 'hover:text-blue-200 hover:border hover:border-blue-200 hover:rounded-md ' : ' '} px-5 py-2 md:py-1`}
                                key={i}>
                                {item}
                            </button>
                        )}
                    </div>
                </div>

                {/* Form Fields */}
                <div className="w-10/12 mx-auto flex gap-7 flex-col items-center">
                    {/* Full Name */}
                    <div className="w-full flex gap-1 bg-white text-black rounded-md p-4">
                        <label className="text-lg font-medium whitespace-nowrap">Full Name:</label>
                        <input
                            type="text"
                            value={form.fullname}
                            onChange={(e) => setForm({ ...form, fullname: e.target.value })}
                            className="w-full rounded-md focus-visible:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="w-full flex gap-1 bg-white text-black rounded-md p-4">
                        <label className="text-lg font-medium whitespace-nowrap">Email:</label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full rounded-md focus-visible:outline-none"
                        />
                    </div>

                    {/* Synopsis */}
                    <div className="w-full flex flex-col gap-1 bg-white text-black rounded-md p-4">
                        <label className="text-lg font-medium">Project Synopsis/Information:</label>
                        <textarea
                            rows="3"
                            value={form.synopsis}
                            onChange={(e) => setForm({ ...form, synopsis: e.target.value })}
                            className="w-full rounded-md focus-visible:outline-none resize-none"
                        ></textarea>
                    </div>

                    {/* Duration */}
                    <div className="w-full flex gap-1 bg-white text-black rounded-md p-4">
                        <label className="text-lg font-medium whitespace-nowrap">Project Duration:</label>
                        <input
                            value={form.duration}
                            onChange={(e) => setForm({ ...form, duration: e.target.value })}
                            type="text"
                            className="w-full rounded-md focus-visible:outline-none"
                        />
                    </div>

                    {/* Payment */}
                    <div className="w-full flex gap-1 bg-white text-black rounded-md p-4">
                        <label className="text-lg font-medium whitespace-nowrap">Payment Offer:</label>
                        <input
                            type="text"
                            value={form.payment}
                            onChange={(e) => setForm({ ...form, payment: e.target.value })}
                            className="w-full rounded-md focus-visible:outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={isDisabled}
                        className={`text-white my-6 rounded-md py-2 px-20 w-fit border ${isDisabled
                            ? "bg-gray-500 border-gray-500 cursor-not-allowed"
                            : "bg-transparent border-white hover:text-black hover:bg-white cursor-pointer"
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
