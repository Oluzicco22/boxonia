import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import {useEffect, useState} from "react";
import FAQSection from "../../components/production/ContactComponent/FAQSection.jsx";
import Service from "../../services/indexApi.js";
import chatBg from "../../assets/chat.png";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
    const service = new Service();
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: ""
    });

    const submitForm = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const res = await service.contactMail(formValues);
            setMessage(res.message);

            setFormValues({
                firstname: "",
                lastname: "",
                email: "",
                message: ""
            });
        } catch (err) {
            const errorsArray = err?.response?.data?.errors || [];

            const normalizedErrors = errorsArray.reduce((acc, msg) => {
                if (msg.toLowerCase().includes("last name")) acc.lastname = msg;
                if (msg.toLowerCase().includes("first name")) acc.firstname = msg;
                if (msg.toLowerCase().includes("email")) acc.email = msg;
                if (msg.toLowerCase().includes("message")) acc.message = msg;
                return acc;
            }, {});
            setError(normalizedErrors);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormValues((prev) => ({...prev, [name]: value}));
        setError((prev) => ({...prev, [name]: undefined}));
    };

    useEffect(() => {
        if (!message) return;

        const timer = setTimeout(() => {
            setMessage(null);
        }, 4000);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <>
            <Helmet>
                <title>Contact Boxonia | Film Production & Talent Inquiries</title>
                <meta
                    name="description"
                    content="Get in touch with Boxonia for film production, talent management, collaborations and partnership opportunities."
                />
                <link rel="canonical" href="https://www.boxonia.com/contact" />

                {/* Open Graph */}
                <meta property="og:title" content="Contact Boxonia | Film Production & Talent Inquiries" />
                <meta
                    property="og:description"
                    content="Reach out to Boxonia for collaborations, productions and talent opportunities."
                />
                <meta property="og:url" content="https://www.boxonia.com/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.boxonia.com/boxonia-icon.svg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Boxonia | Film Production & Talent Inquiries" />
                <meta
                    name="twitter:description"
                    content="Contact Boxonia for creative projects, partnerships and talent bookings."
                />
                <meta name="twitter:image" content="https://www.boxonia.com/boxonia-icon.svg" />
            </Helmet>

            <Header/>
            <div className="w-full md:w-[85%] flex flex-col gap-20 md:gap-28 mx-auto mb-10 mt-28 md:mt-43">

                {/*<!----- Contact Page -->*/}
                <section className="space-y-12 md:space-y-18 text-black">
                    <ArticleHeader title="get in touch"/>
                    <div
                        className="w-[90%] md:w-full mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-47 items-center">
                        <form onSubmit={submitForm} className="w-full flex flex-col gap-7 md:gap-10">
                            {message && <p className="text-green-600">{message}</p>}
                            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full">
                                <div className="flex flex-col gap-1 md:gap-2 text-left w-full">
                                    <label htmlFor="firstname"
                                           className="text-[#7F7F7F] text-xs md:text-base font-medium">First
                                        Name*</label>
                                    <input
                                        type="text"
                                        value={formValues.firstname}
                                        className="text-base md:text-lg bg-white text-[#000000] w-full rounded-[10px] px-3 py-4 focus:outline-0"
                                        onChange={handleChange}
                                        name="firstname"
                                        id="firstname"
                                    />
                                    {error?.firstname &&
                                        <span className="text-red-600 text-sm capitalize">{error.firstname}</span>}
                                </div>

                                <div className="flex flex-col gap-1 md:gap-2 text-left w-full">
                                    <label htmlFor="lastname"
                                           className="text-[#7F7F7F] text-xs md:text-base font-medium">Last
                                        Name*</label>
                                    <input
                                        type="text"
                                        value={formValues.lastname}
                                        className="text-base md:text-lg bg-white text-[#000000] w-full rounded-[10px] px-3 py-4 focus:outline-0"
                                        onChange={handleChange}
                                        name="lastname"
                                        id="lastname"
                                    />
                                    {error?.lastname &&
                                        <span className="text-red-600 text-sm capitalize">{error.lastname}</span>}
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:gap-2 text-left w-full">
                                <label htmlFor="email"
                                       className="text-[#7F7F7F] text-xs md:text-base font-light">Email*</label>
                                <input
                                    value={formValues.email}
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="text-base md:text-lg text-[#000000] bg-white w-full rounded-[10px] px-3 py-4 focus:outline-0"/>
                                {error?.email && <span className="text-red-600 text-sm capitalize">{error.email}</span>}
                            </div>

                            <div className="flex flex-col gap-1 md:gap-2 text-left w-full">
                                <label htmlFor="name"
                                       className="text-[#7F7F7F] text-xs md:text-base font-light">Message*</label>
                                <textarea
                                    value={formValues.message}
                                    onChange={handleChange}
                                    name="message"
                                    rows="3"
                                    id="name"
                                    className="text-base md:text-lg text-[#000000] bg-white w-full rounded-[10px] px-3 py-4 resize-none focus:outline-0"/>
                                {error?.message &&
                                    <span className="text-red-600 text-sm capitalize">{error.message}</span>}
                            </div>

                            <div className="text-center">
                                <button disabled={loading} type="submit"
                                        className={`py-2 px-10 md:px-24 w-fit text-sm md:text-base text-[#989898] border-2 rounded-[10px] disabled:cursor-not-allowed disabled:opacity-25 border-[#989898] hover:bg-white hover:text-black`}>
                                    submit
                                </button>
                            </div>
                        </form>

                        <div className="flex flex-col gap-4 md:gap-6 md:items-end">
                            <div
                                className="bg-[#F0F0F0] rounded-[10px] py-4 md:py-6 px-5 md:px-10 w-full flex justify-between items-end">
                                <div className="space-y-5 md:space-y-8">
                                    {/* SVG unchanged */}
                                    <div className="flex flex-col">
                                        <p className="font-bold md:text-2xl">Chat with us</p>
                                        <span className="text-sm text-[#7F7F7F] font-light">
                                            Get in touch over mail.
                                        </span>
                                    </div>

                                    <a href="mailto:hq@boxonia.com" target="_blank"
                                       className="text-lg md:text-2xl">hq@boxonia.com</a>
                                </div>
                                <div className="w-[30%] md:w-[20%]">
                                    <img src={chatBg} alt="chat" className="w-full"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FAQSection/>
            </div>

            <Footer/>
        </>
    )
}

export default ContactPage;