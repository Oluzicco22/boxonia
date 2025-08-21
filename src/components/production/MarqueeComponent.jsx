const Marquee = ({ items, reverse = false, speed = 15 }) => {
    const animation = reverse
        ? `marquee-reverse ${speed}s linear infinite`
        : `marquee ${speed}s linear infinite`;

    return (
        <div className="w-full overflow-hidden" >
            <div className="flex gap-8" style={{ animation }} aria-hidden="true">
                {[...items, ...items].map((item, i) => (
                    <p key={i} className="text-xl font-bold text-white whitespace-nowrap">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
