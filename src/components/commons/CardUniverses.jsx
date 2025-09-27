import PropTypes from 'prop-types';
import Lottie from 'lottie-react';

import Button from './Button';

function CardUniverses(props) {
    const { lottieSrc, text, btn } = props;
    return (
        <div className='flex flex-col items-center md:flex-row p-3 md:p-10 gap-5 md:gap-20 text-neutral-200'>
            <div className="flex w-1/2 md:w-1/3">
                <Lottie animationData={lottieSrc} />
            </div>
            <div className="flex flex-col md:w-1/2 justify-center items-center">
                <div className="text-center md:text-lg">{text}</div>
                <Button src={btn} text="Voir la page" />
            </div>
        </div>
    )
}

CardUniverses.defaultProps = {
    lottieSrc: "https://placehold.co/600x400/png",
    text: "Default Text",
    btn: "/",
};

CardUniverses.propTypes = {
    lottieSrc: PropTypes.object.isRequired,
    text: PropTypes.object.isRequired,
    btn: PropTypes.string.isRequired,
};

export default CardUniverses;