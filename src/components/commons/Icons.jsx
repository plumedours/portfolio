import PropTypes from 'prop-types';
import icons from "../../assets/icons/icons.svg";

function Icons(props) {
    const { src, alt, className, text } = props;
    return (
        <div className='flex flex-row items-center gap-2'>
            <svg className={className} alt={alt}>
                <use xlinkHref={`${icons}${src}`} />
            </svg>
            <p>{text}</p>
        </div>
    )
}

Icons.defaultProps = {
    src: "#icon-facebook",
    alt: "Icon Placeholder",
    className: "w-10 h-10",
    text: ""
};

Icons.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.string
};

export default Icons;