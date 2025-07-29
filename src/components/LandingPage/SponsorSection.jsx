import InniCross from "../../assets/sponsors/innicross.svg";
import TeethSmile from "../../assets/sponsors/teeth-smile.svg";
import USaid from "../../assets/sponsors/usaid.svg";
import AX from "../../assets/sponsors/ax.svg";

const SponsorSection = () => {
    return (
        <section className="bg-white flex justify-center gap-4 md:gap-16 py-6 md:py-10">
            {[InniCross, TeethSmile, AX, USaid].map((src, i) =>
                <img src={src} alt={`img-${i}`} key={i} className="max-w-20 md:w-auto"></img>
            )}
        </section>
    )
}

export default SponsorSection
