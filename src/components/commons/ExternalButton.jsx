import PropTypes from 'prop-types';

function ExternalButton(props) {
    const { src, text } = props;
    return (
        <a target='_blank' rel="noopener noreferrer" href={src}>
            <button className='bg-primary-blue-dark px-3 py-1 mt-5 uppercase text-xs font-semibold hover:bg-primary-blue text-neutral-50 transition-all'>{text}</button>
        </a>
    )
}

ExternalButton.defaultProps = {
    src: "/",
    text: "Default Text"
};

ExternalButton.propTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.object.isRequired
};

export default ExternalButton;
