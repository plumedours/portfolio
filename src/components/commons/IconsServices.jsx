import PropTypes from 'prop-types';

function IconsServices(props) {
    const { src, alt, className, title, description } = props;
    return (
        <div className="flex flex-col items-center gap-2 text-neutral-200 border shadow-md shadow-neutral-500 border-neutral-700 p-3">
            <img src={src} alt={alt} className={className} />
            <p className='text-lg font-semibold text-center'>{title}</p>
            <div className='text-center'>{description}</div>
        </div>
    )
}

IconsServices.defaultProps = {
    src: "#icon-thumb",
    alt: "Icon Placeholder",
    className: "w-10 h-10",
    title: "Title",
    description: "Description"
};

IconsServices.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired
};

export default IconsServices;