import PropTypes from 'prop-types';

function CardDev(props) {
    const { imgSrc, title, desc, btns, icons } = props;
    return (
        <div className='mb-3 p-3 break-inside-avoid overflow-hidden border shadow-md shadow-neutral-500 border-neutral-700 bg-neutral-900'>
            <div className="flex justify-center">
                <img src={imgSrc} alt={title} className="max-w-full max-h-[300px] h-auto overflow-hidden" />
            </div>
            <div className='border border-neutral-300 w-11/12 mx-auto mt-3'></div>
            <div className="flex flex-col justify-center items-center pt-3">
                <h2 className="text-center text-xl md:text-2xl font-semibold text-neutral-300">{title}</h2>
                {icons}
                <div className="text-center md:text-lg text-neutral-500">{desc}</div>
                <div className='flex flex-row gap-3'>
                    {btns}
                </div>
            </div>
        </div>
    )
}

CardDev.defaultProps = {
    imgSrc: "https://placehold.co/600x400/png",
    title: "Default Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt, mollitia sit consequatur esse architecto quas velit ea molestiae aspernatur accusamus odit eligendi iusto obcaecati officiis molestias ipsam exercitationem labore.",
    btns: '',
    icons: ''
};

CardDev.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    btns: PropTypes.object,
    icons: PropTypes.object
};

export default CardDev;