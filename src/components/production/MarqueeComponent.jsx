const Marquee = ({items, reverse = false, speed = 20}) => {
    const animation = reverse
        ? `marquee-reverse ${speed}s linear infinite`
        : `marquee ${speed}s linear infinite`;

    return (
        <div className="w-full overflow-hidden mb-6">
            <div className="flex gap-20" style={{animation}} aria-hidden="true">
                {[...items, ...items].map((item, i) => (
                    <p key={i} className="text-sm md:text-xl md:font-medium text-[#B7B7B7] whitespace-nowrap border border-[#434343] px-4 py-5 rounded-xl">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
