import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import {Link} from "react-router-dom";
import {FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter, FaYoutube} from "react-icons/fa6";
import {useEffect, useState} from "react";
import FAQSection from "../../components/production/ContactComponent/FAQSection.jsx";
import Service from "../../services/indexApi.js";

const ContactPage = () => {
    const service = new Service();
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const submitForm = async (e) => {
        e.preventDefault()
        setLoading(true);
        try {
            const res = await service.contactMail(formValues)
            setMessage(res.message)
        }catch (err) {
            const errorsArray = err?.response?.data?.errors || [];

            const normalizedErrors = errorsArray.reduce((acc, msg) => {
                if (msg.toLowerCase().includes("name")) acc.name = msg;
                if (msg.toLowerCase().includes("email")) acc.email = msg;
                if (msg.toLowerCase().includes("subject")) acc.subject = msg;
                if (msg.toLowerCase().includes("message")) acc.message = msg;
                return acc;
            }, {});
            setError(normalizedErrors);
        }finally {
            setLoading(false);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues((prev) => ({ ...prev, [name]: value }));
        setError((prev) => ({ ...prev, [name]: undefined }));
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
            <Header />
            <div className="w-full flex justify-center mb-10 mt-40">
                <ArticleHeader title="contact us" />
            </div>
            <section className="flex flex-col items-center text-center gap-5">
                <div className="flex flex-col gap-2">
                    <h2 className="text-yellow-500 text-lg font-semibold">Address:</h2>
                    <address className="not-italic text-white text-lg font-medium leading-relaxed">
                        213a Igbosere Road Lagos, Nigeria
                    </address>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-yellow-500 text-lg font-semibold">Phone:</h2>
                    <div className="not-italic text-white text-lg font-medium leading-relaxed">
                        <a href='tel:+2349033071442' className="hover:underline">+2349033071442</a>,
                        <a href='tel:+2348184468748' className="hover:underline">+2348184468748</a>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-yellow-500 text-lg font-semibold">Email:</h2>
                    <Link
                        to="mailto:boxoniablueprint@gmail.com"
                        target="_blank"
                        className="text-white text-lg font-medium leading-relaxed hover:underline"
                    >
                        boxoniablueprint@gmail.com
                    </Link>
                </div>
                <nav className="flex gap-3 text-3xl">
                    <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
                    <a href="#" className="hover:text-yellow-300"><FaXTwitter /></a>
                    <a href="#"><FaLinkedinIn className="text-transparent stroke-white stroke-[30] hover:stroke-yellow-400" /></a>
                    <a href="#"><FaFacebookF className="text-transparent stroke-white stroke-[30] hover:stroke-yellow-400" /></a>
                    <a href="#"><FaYoutube className="text-transparent stroke-white stroke-[30] hover:stroke-yellow-400" /></a>
                </nav>

            </section>

            {/*<!----- Contact Page -->*/}
            <section className="flex flex-col items-center text-center my-12 gap-4 text-black">
                <ArticleHeader title="get in touch" />
                {message && <p className="text-green-600">{message}</p>}
                <form onSubmit={submitForm} className="w-[90%] md:w-2/5 flex flex-col gap-4">
                    <div className="flex flex-col gap-1 text-left w-full">
                        <label htmlFor="name" className="text-gray-400 text-base font-medium">Name:</label>
                        <input
                            type="text"
                            value={formValues.name}
                            className="text-lg font-medium bg-white w-full rounded-md px-2 py-1 focus:outline-0"
                            onChange={handleChange}
                            name="name"
                            id="name"
                        />

                        {error?.name && <span className="text-red-600 text-sm capitalize">{error.name}</span>}
                    </div>

                    <div className="flex flex-col gap-1 text-left w-full">
                        <label htmlFor="email" className="text-gray-400 text-base font-medium">Email:</label>
                        <input
                            value={formValues.email}
                            onChange={handleChange}
                            type="email"
                            name="email"
                            id="email"
                            className="text-lg font-medium bg-white w-full rounded-md px-2 py-1 focus:outline-0" />
                        {error?.email && <span className="text-red-600 text-sm capitalize">{error.email}</span>}
                    </div>

                    <div className="flex flex-col gap-1 text-left w-full">
                        <label htmlFor="subject" className="text-gray-400 text-base font-medium">Subject:</label>
                        <input
                            value={formValues.subject}
                            onChange={handleChange}
                            type="text"
                            name="subject"
                            id="subject"
                            className="text-lg font-medium bg-white w-full rounded-md px-2 py-1 focus:outline-0" />
                        {error?.subject && <span className="text-red-600 text-sm capitalize">{error.subject}</span>}
                    </div>

                    <div className="flex flex-col gap-1 text-left w-full">
                        <label htmlFor="name" className="text-gray-400 text-base font-medium">Your Message: (optional)</label>
                        <textarea
                            value={formValues.message}
                            onChange={handleChange}
                            name="message"
                            rows="3"
                            id="name"
                            className="text-lg font-medium bg-white w-full rounded-md px-2 py-1 resize-none focus:outline-0" />
                        {error?.message && <span className="text-red-600 text-sm capitalize">{error.message}</span>}
                    </div>
                    <div>
                        <button
                            disabled={loading}
                            type="submit"
                            className={`py-2 sm:px-12 w-full sm:w-fit text-[#989898] border-2 rounded-md disabled:opacity-25 border-[#989898] hover:bg-white hover:text-black`}>send message</button>
                    </div>
                </form>
            </section>

            <FAQSection />

            <Footer />
        </>
    )
}

export default ContactPage;
