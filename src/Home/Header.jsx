import './Home.css';
import TitleDivider from '../components/commons/TitleDivider';

function Header() {
    return (
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] image-container">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-neutral-200 text-center bg-neutral-900 bg-opacity-75 p-5 w-11/12 sm:w-10/12 md:w-auto space-y-2 md:space-y-5">
                    <TitleDivider title="Maxime Bory" classNameColor='text-neutral-200' classNameBgColor='bg-neutral-200' />
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 uppercase">Développeur web</h2>
                    <p className="text-lg md:text-xl lg:text-2xl">Osez demander.</p>
                    <p className='text-xs md:text-base'>Création d’application web et web mobile. Photographie. Modélisation 3D.</p>
                </div>
            </div>
        </div>
    );
}

export default Header;