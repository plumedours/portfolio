import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { scroller } from "react-scroll";

import logo from '../../assets/logo_text_white.svg';

function LogoSite() {

    const location = useLocation();

    const handleLinkClick = (sectionId) => () => {
        if (location.pathname === "/") {
            // Si vous êtes sur la page d'accueil, utilisez react-scroll
            scroller.scrollTo(sectionId, {
                duration: 500,
                offset: -70,
                smooth: true,
            });
        }
    };

    return (
        <Link className="active"
            to="/#home"
            spy="true"
            smooth="true"
            offset={-70}
            duration={500}
            onClick={handleLinkClick("home")}
        >
            <img className="px-5 w-36" src={logo} alt="Logo Site" />
        </Link>
    )
}

export default LogoSite;