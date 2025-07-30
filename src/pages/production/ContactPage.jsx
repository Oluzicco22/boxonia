import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import {Link} from "react-router-dom";
import {FaInstagram, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {useState} from "react";
import FAQSection from "../../components/production/ContactComponent/FAQSection.jsx";

const ContactPage = () => {

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    return (
        <>
            <Header />
            <div className="w-full flex justify-center my-10">
                <ArticleHeader title="contact us" />
            </div>
            <section className="flex flex-col items-center text-center gap-5">
                <div className="flex flex-col gap-2">
                    <h2 className="text-yellow-500 text-lg font-semibold">Address:</h2>
                    <address className="not-italic text-white text-lg font-medium leading-relaxed">
                        213a Igbosere Road<br />
                        Lagos, Nigeria
                    </address>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-yellow-500 text-lg font-semibold">Phone:</h2>
                    <p className="not-italic text-white text-lg font-medium leading-relaxed">
                        +234 809 222 2071
                    </p>
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
                <nav className="flex gap-3 text-gray-200 text-3xl">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><FaLinkedin /></a>
                </nav>

            </section>

            <section className="flex flex-col items-center text-center my-12 gap-4 text-black">
                <h2 className="capitalize text-3xl font-medium text-gray-400">get in touch</h2>
                <form onSubmit={() => {}} className="w-4/6 md:w-2/5 flex flex-col gap-4">
                    <div className="flex flex-col gap-1 text-left w-full">
                        <label htmlFor="name" className="text-gray-400 text-base font-medium">Name:</label>
                        <input
                            type="text"
                            value={formValues.name}
                            onChange={(e) => setFormValues({...formValues, name: e.target.value})}
                            id="name"
                            className="text-lg font-medium bg-white w-full rounded-md px-2 py-1 focus:outline-0"
                        />
                    </div>

                    <div className="flex flex-col gap-1 text-left w-full">
                        <label htmlFor="email" className="text-gray-400 text-base font-medium">Email:</label>
                        <input
                            value={formValues.email}
                            onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                            type="email" id="email" className="text-lg font-medium bg-white w-full rounded-md px-2 py-1 focus:outline-0" />
                    </div>

                    <div className="flex flex-col gap-1 text-left w-full">
                        <label htmlFor="subject" className="text-gray-400 text-base font-medium">Subject:</label>
                        <input
                            value={formValues.subject}
                            onChange={(e) => setFormValues({...formValues, subject: e.target.value})}
                            type="text" id="subject" className="text-lg font-medium bg-white w-full rounded-md px-2 py-1 focus:outline-0" />
                    </div>

                    <div className="flex flex-col gap-1 text-left w-full">
                        <label htmlFor="name" className="text-gray-400 text-base font-medium">Your Message: (optional)</label>
                        <textarea
                            value={formValues.message}
                            onChange={(e) => setFormValues({...formValues, message: e.target.value})}
                            rows="3" id="name" className="text-lg font-medium bg-white w-full rounded-md px-2 py-1 resize-none focus:outline-0" />
                    </div>
                </form>
            </section>

            <FAQSection />

            <Footer />
        </>
    )
}

export default ContactPage;
