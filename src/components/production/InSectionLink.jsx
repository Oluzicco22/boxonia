
const InSectionLink = ({name, path, ariaLabel}) => {
    return (
        <a href={path} aria-label={ariaLabel} className="text-center text-nowrap text-sm border-1 font-normal hover:bg-white hover:text-black border-[#989898] text-[#989898] px-20 py-3 rounded-lg">{name}</a>
    )
}

export default InSectionLink
