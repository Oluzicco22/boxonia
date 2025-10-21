import ArticleHeader from "../ArticleHeader.jsx";
import AlumniCard from "./AlumniCard.jsx";
import alumni from "../../../data/alumni.json"

const BoxoniaAlumniComponent = () => {
    return (
        <section className="flex flex-col px-3 md:px-0 w-full md:w-[85%] mx-auto items-center gap-16">
            <ArticleHeader title="Boxonians"/>
            <div className="flex flex-col gap-12 md:gap-24 w-[95%] md:w-[98%]">
                {alumni.map((props, i) => <AlumniCard key={i} {...props} />)}
            </div>
        </section>
    )
}

export default BoxoniaAlumniComponent
