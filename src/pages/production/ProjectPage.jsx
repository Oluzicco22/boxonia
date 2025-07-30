import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import {Link} from "react-router-dom";
import Project1Image from "../../assets/Nolly babes.png";
import Project2Image from "../../assets/son of d soil.png";

const ProjectPage = () => {
    const images = [
        Project1Image,
        Project2Image
        ]
    return (
        <>
            <Header />
            <div className="w-full flex justify-center my-10">
                <ArticleHeader title="Projects" />
            </div>
            {images.map((_, i) => (
                <article key={i}
                    className="my-10 flex justify-center items-end h-[40vh] w-full relative  bg-black/10 bg-blend-darken bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${images[i]})`,
                    }}>
                    <div className="w-4/5 flex gap-3 text-white flex-col mb-16">
                        <Link to={`/production/projects/${i + 1}`} className="text-right font-medium text-lg">{`see more --->`}</Link>
                    </div>
                </article>
            ))}
            <Footer />
        </>
    )
}

export default ProjectPage;
