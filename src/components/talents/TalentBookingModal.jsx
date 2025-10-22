import {ChevronDown, XCircle} from "lucide-react";
import {useState} from "react";
import instance from "../../server.js";

const TalentBookingModal = ({onClose, name, id}) => {
    const [type, setType] = useState({
        title: 'Project Type',
        value: null,
    });
    const [platform, setPlatform] = useState({
        title: 'Platform',
        value: null,
    });
    const [success, setSuccess] = useState(null);
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState(null)

    const [form, setForm] = useState({
        fullName: '',
        email: '',
        synopsis: '',
        duration: '',
        payment: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingData = {
            type: type.value,
            platform: platform.value,
            ...form
        };

        try {
            const res = await instance.post(`/book-talent/${id}`, bookingData);
            res.status && setSuccess(res.data.message);

            setTimeout(() => {
                onClose();
            }, 3000)
        } catch (e) {
            if (e?.response?.data?.errors) {
                const errs = e.response.data.errors;
                const fields = ["type", "platform", "email", "fullName", "synopsis", "payment", "duration"];
                const groupedErrors = fields.reduce((acc, field) => {
                    acc[field] = errs.filter(err =>
                        err.toLowerCase().includes(field.toLowerCase())
                    );
                    return acc;
                }, {});

                setErrors(groupedErrors);
            } else {
                setErrorMessage(e.message || 'Something went wrong. Please try again later.')
            }
            setTimeout(() => {
                setErrorMessage(null)
            }, 3000)
        }

    };

    const types = ['Feature Film', 'Short Film', 'AD Commercial', 'Music Video', 'Brand Influencing', 'Others']

    const platforms = ['Cinema', 'Netflix', 'Amazon', 'Youtube', 'Others']

    const isDisabled =
        !type.value ||
        !platform.value ||
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
            setErrors({...errors, type: []})
        } else {
            setPlatform(prev => ({
                ...prev,
                value: selectedText,
                title: selectedText,
            }));
            setErrors({...errors, platform: []})
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
                <form onSubmit={handleSubmit} className="w-full md:w-10/12 mx-auto flex gap-7 flex-col items-center">
                    {success && (<p className="text-sm text-green-300">{success}</p>)}
                    {errorMessage && (<p className="text-sm text-red-300">{errorMessage}</p>)}

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
                        {errors.type?.length > 0 && (
                            errors.type.map((err, index) => (
                                <p key={index} className="text-sm text-red-300">* {err}</p>
                            ))
                        )}
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
                        {errors.platform?.length > 0 && (
                            errors.platform.map((err, index) => (
                                <p key={index} className="text-sm text-red-300">* {err}</p>
                            ))
                        )}
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
                            onChange={(e) => {
                                setForm({...form, fullName: e.target.value})
                                setErrors({...errors, fullName: []})
                            }}
                            className="w-full focus-visible:outline-none bg-white text-black rounded-[10px] md:rounded-md p-4"
                        />
                        {errors.fullName?.length > 0 && (
                            errors.fullName.map((err, index) => (
                                <p key={index} className="text-sm text-red-300">* {err}</p>
                            ))
                        )}
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
                            onChange={(e) => {
                                setForm({...form, email: e.target.value})
                                setErrors({...errors, email: []})
                            }}
                            className="w-full focus-visible:outline-none bg-white text-black rounded-[10px] md:rounded-md p-4"
                        />
                        {errors.email?.length > 0 && (
                            errors.email.map((err, index) => (
                                <p key={index} className="text-sm text-red-300">* {err}</p>
                            ))
                        )}
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
                            onChange={(e) => {
                                setForm({...form, synopsis: e.target.value})
                                setErrors({...errors, synopsis: []})
                            }}
                            className="w-full focus-visible:outline-none bg-white text-black rounded-[10px] md:rounded-md p-4"
                        ></textarea>
                        {errors.synopsis?.length > 0 && (
                            errors.synopsis.map((err, index) => (
                                <p key={index} className="text-sm text-red-300">* {err}</p>
                            ))
                        )}
                    </div>

                    {/* Duration */}
                    <div className="w-full space-y-1">
                        <label htmlFor="duration" className="text-[#A0A0A0] text-sm md:text-lg whitespace-nowrap">Project
                            Duration:</label>
                        <input
                            value={form.duration}
                            name="duration"
                            id="duration"
                            onChange={(e) => {
                                setForm({...form, duration: e.target.value})
                                setErrors({...errors, duration: []})
                            }}
                            type="text"
                            className="w-full focus-visible:outline-none bg-white text-black rounded-[10px] md:rounded-md p-4"
                        />
                        {errors.duration?.length > 0 && (
                            errors.duration.map((err, index) => (
                                <p key={index} className="text-sm text-red-300">* {err}</p>
                            ))
                        )}
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
                            onChange={(e) => {
                                setForm({...form, payment: e.target.value})
                                setErrors({...errors, payment: []})
                            }}
                            className="w-full focus-visible:outline-none bg-white text-black rounded-[10px] md:rounded-md p-4"
                        />
                        {errors.payment?.length > 0 && (
                            errors.payment.map((err, index) => (
                                <p key={index} className="text-sm text-red-300">* {err}</p>
                            ))
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isDisabled}
                        className={`my-6 rounded-[10px] text-xs md:text-base py-2 px-7 md:px-20 w-fit border ${isDisabled
                            ? "cursor-not-allowed border-[#989898] text-[#989898]"
                            : "bg-transparent border-[#FFFFFF] hover:text-black hover:bg-white cursor-pointer text-[#FFFFFF]"
                        }`}
                    >
                        {`Book ${name}`}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TalentBookingModal;
