
const InSectionLink = ({name, path, ariaLabel}) => {
    return (
        <a
            href={path}
           aria-label={ariaLabel}
            className="text-center text-nowrap text-sm border-1 font-normal hover:bg-white hover:text-black border-[#989898] text-[#989898] px-10 md:px-20 py-3 mt-0 md:mt-8 rounded-2xl md:rounded-lg">{name}</a>
    )
}

export default InSectionLink
