import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button(props) {
    const { src, text } = props;
    return (
        <Link to={src}>
            <button className='bg-primary-blue-dark px-3 py-1 mt-5 uppercase text-xs font-semibold hover:bg-primary-blue text-neutral-50 transition-all'>{text}</button>
        </Link>
    )
}

Button.defaultProps = {
    src: "/",
    text: "Default Text"
};

Button.propTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Button;