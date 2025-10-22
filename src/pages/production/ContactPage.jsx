import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import {useEffect, useState} from "react";
import FAQSection from "../../components/production/ContactComponent/FAQSection.jsx";
import Service from "../../services/indexApi.js";
import chatBg from "../../assets/chat.png";

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

            // Reset the form values
            setFormValues({
                firstname: "",
                lastname: "",
                email: "",
                message: ""
            });
        } catch (err) {
            const errorsArray = err?.response?.data?.errors || [];
            console.log(errorsArray);

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
                                    <svg width="39" height="33" viewBox="0 0 39 33" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.57275 0.586548H25.5913C26.0371 0.586618 26.4519 0.738649 26.7466 0.989868C27.0387 1.23902 27.1831 1.55847 27.1831 1.87073V16.1403C27.1831 16.4525 27.0388 16.772 26.7466 17.0211C26.4519 17.2723 26.0371 17.4244 25.5913 17.4244H13.7173L13.5776 17.5436L7.9126 22.3727C7.69355 22.5592 7.40572 22.6928 7.08252 22.7477C6.75913 22.8025 6.42442 22.7738 6.12354 22.6676C5.8228 22.5614 5.57776 22.3862 5.41162 22.1744C5.24651 21.9639 5.16561 21.7261 5.16553 21.4918V17.4244H2.57275C2.12689 17.4244 1.71226 17.2724 1.41748 17.0211C1.12514 16.7719 0.97998 16.4526 0.97998 16.1403V1.87073L0.986816 1.75256C1.01866 1.47895 1.16185 1.20779 1.41748 0.989868C1.71226 0.738591 2.12686 0.586548 2.57275 0.586548Z"
                                            fill="white" stroke="black"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M10.9902 25.4429C11.06 25.3882 11.1283 25.3323 11.1953 25.2752L15.6358 21.4918H25.5902C27.2552 21.4918 28.8519 20.928 30.0292 19.9245C31.2065 18.9209 31.868 17.5598 31.868 16.1405V9.0054H36.0531C36.6081 9.0054 37.1404 9.19333 37.5328 9.52786C37.9252 9.86238 38.1457 10.3161 38.1457 10.7892V25.0594C38.1457 25.5325 37.9252 25.9862 37.5328 26.3207C37.1404 26.6552 36.6081 26.8431 36.0531 26.8431H33.9605V30.4107C33.9604 30.7634 33.8377 31.1082 33.6077 31.4015C33.3778 31.6948 33.051 31.9233 32.6687 32.0583C32.2864 32.1933 31.8657 32.2286 31.4598 32.1598C31.054 32.091 30.6811 31.9212 30.3885 31.6718L24.7239 26.8431H13.0347C12.5577 26.8433 12.095 26.7046 11.7232 26.4499C11.3514 26.1952 11.0928 25.8399 10.9902 25.4429Z"
                                              fill="black"/>
                                    </svg>
                                    <div className="flex flex-col">
                                        <p className="font-bold md:text-2xl">Chat with us</p>
                                        <span
                                            className="text-sm text-[#7F7F7F] font-light">Get in touch over mail.
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
