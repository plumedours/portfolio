import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useEffect } from "react";

import LogoSite from "../commons/LogoSite";
import Icons from "../commons/Icons";

function Footer() {

    const location = useLocation();

    useEffect(() => {

        if (location.pathname != "/") {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);

    const handleLinkClick = (sectionId) => () => {
        if (location.pathname === "/") {
            // Si vous êtes sur la page d'accueil, utilisez react-scroll
            scroller.scrollTo(sectionId, {
                duration: 500,
                offset: -70,
                smooth: "true",
            });
        }
    };

    return (
        <footer className="w-full bg-neutral-900 shadow relative py-5">
            <div className="justify-between mx-auto relative">
                <div className="">
                    <div className="flex items-start justify-evenly m-3">
                        <div className="hidden md:block">
                            <LogoSite />
                        </div>
                        <div className="flex flex-col gap-3 text-neutral-500">
                            <p className="text-neutral-400 uppercase font-semibold text-sm">Plan du site</p>
                            <ul className="text-sm">
                                <RouterLink
                                    activeclass="active"
                                    to="/#home"
                                    spy="true"
                                    smooth="true"
                                    offset={-70}
                                    duration={500}
                                    onClick={handleLinkClick("home")}
                                >
                                    <li className="hover:scale-105 hover:text-neutral-400 transition cursor-pointer">Accueil</li>
                                </RouterLink>
                                <RouterLink
                                    activeclass="active"
                                    to="/#universes"
                                    spy="true"
                                    smooth="true"
                                    offset={-70}
                                    duration={500}
                                    onClick={handleLinkClick("universes")}
                                >
                                    <li className="hover:scale-105 hover:text-neutral-400 transition cursor-pointer">Mes univers</li>
                                </RouterLink>
                                <RouterLink
                                    activeclass="active"
                                    to="/#skills"
                                    spy="true"
                                    smooth="true"
                                    offset={-70}
                                    duration={500}
                                    onClick={handleLinkClick("skills")}
                                >
                                    <li className="hover:scale-105 hover:text-neutral-400 transition cursor-pointer">Compétences</li>
                                </RouterLink>
                                <RouterLink
                                    activeclass="active"
                                    to="/#services"
                                    spy="true"
                                    smooth="true"
                                    offset={-70}
                                    duration={500}
                                    onClick={handleLinkClick("services")}
                                >
                                    <li className="hover:scale-105 hover:text-neutral-400 transition cursor-pointer">Prestations et services</li>
                                </RouterLink>
                                <RouterLink to="/development">
                                    <li className="hover:scale-105 hover:text-neutral-400 transition">Développement</li>
                                </RouterLink>
                                <RouterLink to="/gallery">
                                    <li className="hover:scale-105 hover:text-neutral-400 transition">Galerie photo</li>
                                </RouterLink>
                                <RouterLink to="/modelization">
                                    <li className="hover:scale-105 hover:text-neutral-400 transition">Modélisation 3D</li>
                                </RouterLink>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-3 text-neutral-500">
                                <p className="text-neutral-400 uppercase font-semibold text-sm">Informations</p>
                                <ul className="text-sm">
                                    <RouterLink to="/about">
                                        <li className="hover:scale-105 hover:text-neutral-400 transition">À propos</li>
                                    </RouterLink>
                                    <RouterLink to="/contact">
                                        <li className="hover:scale-105 hover:text-neutral-400 transition">Contact</li>
                                    </RouterLink>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-neutral-400 uppercase font-semibold text-sm">Réseaux sociaux</p>
                                <div className="flex flex-row gap-2 items-center text-neutral-200">
                                    <a className="hover:scale-110 transition" href="http://www.linkedin.com/in/maxime-bory" target="_blank" rel="noopener noreferrer">
                                        <Icons src="#icon-linkedin" alt="Icon Placeholder" className="w-5 h-5 text-neutral-500 hover:text-neutral-400" />
                                    </a>
                                    <a className="hover:scale-110 transition" href="https://www.facebook.com/www.plumedours.fr" target="_blank" rel="noopener noreferrer">
                                        <Icons src="#icon-facebook" alt="Icon Placeholder" className="w-5 h-5 text-neutral-500 hover:text-neutral-400" />
                                    </a>
                                    <a className="hover:scale-110 transition" href="https://github.com/plumedours" target="_blank" rel="noopener noreferrer">
                                        <Icons src="#icon-github" alt="Icon Placeholder" className="w-5 h-5 text-neutral-500 hover:text-neutral-400" />
                                    </a>
                                    <a className="hover:scale-110 transition" href="https://discord.gg/kTJPvKAw" target="_blank" rel="noopener noreferrer">
                                        <Icons src="#icon-discord" alt="Icon Placeholder" className="w-5 h-5 text-neutral-500 hover:text-neutral-400" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center border-t border-neutral-300 w-11/12 mx-auto">
                <p className="text-neutral-500 text-xs mt-3">© 2023 Maxime Bory</p>
            </div>
        </footer>
    );
}

export default Footer;