import Header from "../components/Header.jsx";
import ArticleHeader from "../components/ArticleHeader.jsx";
import Footer from "../components/Footer.jsx";
import HeroImage from "../assets/hero.png";
import {Link} from "react-router-dom";

const ProjectPage = () => {
    return (
        <main className="text-white">
            <Header />
            <div className="w-full flex justify-center my-10">
                <ArticleHeader title="Projects" />
            </div>
            {[...Array(10).keys()].map((_, i) => (
                <article key={i}
                    className="my-10 flex justify-center items-end h-[40vh] w-full relative  bg-black/80 bg-blend-darken bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${HeroImage})`,
                    }}>
                    <div className="w-4/5 flex gap-3 text-white flex-col mb-16">
                        <Link to="#" className="text-right font-medium text-lg">{`see more --->`}</Link>
                    </div>
                </article>
            ))}
            <Footer />
        </main>
    )
}

export default ProjectPage;
