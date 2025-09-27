import PropTypes from 'prop-types';

function IconsSkills(props) {
    const { src, alt, className, iconName } = props;
    return (
        <div className="flex flex-row items-center gap-2">
            <img src={src} alt={alt} className={className} />
            <p>{iconName}</p>
        </div>
    )
}

IconsSkills.defaultProps = {
    src: "#icon-thumb",
    alt: "Icon Placeholder",
    className: "w-10 h-10",
    iconName: "iconName"
};

IconsSkills.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    iconName: PropTypes.string.isRequired
};

export default IconsSkills;