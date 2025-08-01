import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import {Link} from "react-router-dom";

const ProjectPage = () => {
    const projects = [
        {
            image : "https://res.cloudinary.com/dybmufexj/image/upload/v1753986407/Nolly_babes_lnzopy.png",
            status : true
        },
        {
            image : "https://res.cloudinary.com/dybmufexj/image/upload/v1753986408/son_of_d_soil_vevinh.png",
            status : false
        }
        ]
    return (
        <>
            <Header />
            <div className="w-full flex justify-center my-10">
                <ArticleHeader title="Projects" />
            </div>
            {projects.map((project, i) => (
                <article key={i}
                    className="my-10 flex justify-center items-end h-[40vh] w-full relative  bg-black/10 bg-blend-darken bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${project.image})`,
                    }}>
                    <div className="w-4/5 flex gap-3 text-white flex-col mb-16">
                        {project.status ?
                            <Link to={`/production/projects/${i + 1}`} className="text-right font-medium text-lg">{`see more --->`}</Link>
                            : <p className="text-right font-medium text-lg"> coming soon...</p>}
                    </div>
                </article>
            ))}
            <Footer />
        </>
    )
}

export default ProjectPage;
