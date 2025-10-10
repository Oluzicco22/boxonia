import {ChevronDown, XCircle} from "lucide-react";
import {useState} from "react";

const TalentBookingModal = ({onClose, name}) => {
    const [type, setType] = useState({
        title: 'Project Type',
        value: null,
    });
    const [platform, setPlatform] = useState({
        title: 'Platform',
        value: null,
    });

    const [form, setForm] = useState({
        fullName: '',
        email: '',
        synopsis: '',
        duration: '',
        payment: '',
    });

    const handleSubmit = () => {
        const bookingData = {
            type: type.value,
            platform: platform.value,
            ...form
        };
        console.log("Booking Data:", bookingData);
        // TODO: send bookingData to API
        // onClose();
    };

    const types = ['Feature Film', 'Short Film', 'AD Commercial', 'Music Video', 'Brand Influencing', 'Others']

    const platforms = ['Cinema', 'Netflix', 'Amazon', 'Youtube', 'Others']

    const isDisabled =
        !type ||
        !platform ||
        !form.synopsis.trim() ||
        !form.duration.trim() ||
        !form.payment.trim() ||
        !form.fullName.trim() ||
        !form.email.trim();

    const toggleDropdown = (e) => {
        const element = e.currentTarget;
        const nextSibling = element.nextElementSibling;

        if (nextSibling) {
            element.children[1].classList.toggle('rotate-180');
            nextSibling.classList.toggle('hidden');
        }
    };

    const selectCategory = (e) => {
        const value = e.target;
        const parent = value.parentElement;
        const selectedText = value.innerText;

        if (parent.classList.contains('type')) {
            setType(prev => ({
                ...prev,
                value: selectedText,
                title: selectedText,
            }));
        } else {
            setPlatform(prev => ({
                ...prev,
                value: selectedText,
                title: selectedText,
            }));
        }

        parent.previousElementSibling.click();
    }

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
                {/* Form Fields */}
                <div className="w-full md:w-10/12 mx-auto flex gap-7 flex-col items-center">
                    {/* Project Type */}
                    <div className="w-full relative">
                        <button
                            onClick={toggleDropdown}
                            type="button"
                            className="w-full text-[#7D7D7D] cursor-pointer text-base md:text-lg bg-black rounded-[10px] md:rounded-md p-4 flex items-center justify-between"
                        >
                            <span
                                className={`${type.title !== 'Project Type' ? 'text-[#F6B62B]' : 'text-[#B7B7B7]'}`}>{type.title}</span>
                            <span className="transform"><ChevronDown/></span>
                        </button>
                        <div
                            className="absolute hidden w-full type bg-black rounded-[10px] px-6 py-4 space-y-6 top-15 md:top-20 z-20">
                            {types.map((ty, index) => (
                                <p onClick={selectCategory}
                                   className={`cursor-pointer hover:text-[#F6B62B] ${ty === type.value ? 'text-[#F6B62B]' : 'text-[#B7B7B7]'}`}
                                   key={index}>{ty}</p>
                            ))}
                        </div>
                    </div>

                    {/* Platform */}
                    <div className="w-full relative">
                        <button
                            onClick={toggleDropdown}
                            type="button"
                            className="w-full text-[#7D7D7D] cursor-pointer text-base md:text-lg bg-black rounded-[10px] md:rounded-md p-4 flex items-center justify-between"
                        >
                            <span
                                className={`${platform.title !== 'Platform' ? 'text-[#F6B62B]' : 'text-[#B7B7B7]'}`}>{platform.title}</span>
                            <span className="transform"><ChevronDown/></span>
                        </button>
                        <div
                            className="absolute hidden w-full platform bg-black rounded-[10px] px-6 py-4 space-y-6 top-15 md:top-20 z-10">
                            {platforms.map((plat, index) => (
                                <p onClick={selectCategory}
                                   className={`cursor-pointer hover:text-[#F6B62B] ${plat === platform.value ? 'text-[#F6B62B]' : 'text-[#B7B7B7]'}`}
                                   key={index}>{plat}</p>
                            ))}
                        </div>
                    </div>

                    {/* Full Name */}
                    <div className="w-full space-y-1">
                        <label htmlFor="fullName" className="text-[#A0A0A0] text-sm md:text-lg whitespace-nowrap">Full
                            Name:</label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            value={form.fullName}
                            onChange={(e) => setForm({...form, fullName: e.target.value})}
                            className="w-full focus-visible:outline-none bg-white text-black rounded-[10px] md:rounded-md p-4"
                        />
                    </div>

                    {/* Email */}
                    <div className="w-full space-y-1">
                        <label htmlFor="email"
                               className="text-[#A0A0A0] text-sm md:text-lg whitespace-nowrap">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                            className="w-full focus-visible:outline-none bg-white text-black rounded-[10px] md:rounded-md p-4"
                        />
                    </div>

                    {/* Synopsis */}
                    <div className="w-full space-y-1">
                        <label htmlFor="synopsis" className="text-[#A0A0A0] text-sm md:text-lg whitespace-nowrap">Project
                            Synopsis/Information:</label>
                        <textarea
                            rows="3"
                            name="synopsis"
                            id="synopsis"
                            value={form.synopsis}
                            onChange={(e) => setForm({...form, synopsis: e.target.value})}
                            className="w-full focus-visible:outline-none bg-white text-black rounded-[10px] md:rounded-md p-4"
                        ></textarea>
                    </div>

                    {/* Duration */}
                    <div className="w-full space-y-1">
                        <label htmlFor="duration" className="text-[#A0A0A0] text-sm md:text-lg whitespace-nowrap">Project
                            Duration:</label>
                        <input
                            value={form.duration}
                            name="duration"
                            id="duration"
                            onChange={(e) => setForm({...form, duration: e.target.value})}
                            type="text"
                            className="w-full focus-visible:outline-none bg-white text-black rounded-[10px] md:rounded-md p-4"
                        />
                    </div>

                    {/* Payment */}
                    <div className="w-full space-y-1">
                        <label htmlFor="payment" className="text-[#A0A0A0] text-sm md:text-lg whitespace-nowrap">Payment
                            Offer:</label>

                        <input
                            type="text"
                            value={form.payment}
                            id="payment"
                            name="payment"
                            onChange={(e) => setForm({...form, payment: e.target.value})}
                            className="w-full focus-visible:outline-none bg-white text-black rounded-[10px] md:rounded-md p-4"
                        />
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
