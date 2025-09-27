import PropTypes from 'prop-types';

function TitleDivider(props) {
    const { title, classNameColor, classNameBgColor } = props;
    return (
        <div className={`flex items-center pb-4 ${classNameColor}`}>
            <div className={`flex-1 h-0.5 ${classNameBgColor}`}></div>
            <div className="mx-4 text-xs sm:text-sm md:text-md uppercase">{title}</div>
            <div className={`flex-1 h-0.5 ${classNameBgColor}`}></div>
        </div>
    )
}

TitleDivider.defaultProps = {
    title: "Title Divider",
    classNameColor: "text-neutral-200",
    classNameBgColor: "bg-neutral-200",
};

TitleDivider.propTypes = {
    title: PropTypes.string.isRequired,
    classNameColor: PropTypes.string.isRequired,
    classNameBgColor: PropTypes.string.isRequired,
};

export default TitleDivider;