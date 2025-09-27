import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scroller } from "react-scroll";

import Icons from "../commons/Icons";
import LogoSite from "../commons/LogoSite";

function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const openMenu = () => {
        setNavbar(true);
    };

    const closeMenu = () => {
        setNavbar(false);
    };

    const location = useLocation();

    const handleLinkClick = (sectionId) => () => {
        if (location.pathname === "/") {
            // Si vous êtes sur la page d'accueil, utilisez react-scroll
            scroller.scrollTo(sectionId, {
                duration: 500,
                offset: -70,
                smooth: "true",
            });
        }
        closeMenu();
    };

    return (
        <nav className="w-full bg-neutral-900 bg-opacity-90 shadow sticky top-0 z-10">
            <div className="justify-between mx-auto">
                <div className="">
                    <div className="flex items-center justify-between m-3">
                        <LogoSite />
                        <div className="flex justify-end gap-5 items-center">
                            <div className="flex flex-row gap-2 items-center text-neutral-200">
                                <a className="hover:scale-110 transition" href="http://www.linkedin.com/in/maxime-bory" target="_blank" rel="noopener noreferrer">
                                    <Icons src="#icon-linkedin" alt="Icon Placeholder" className="w-4 h-4 sm:w-6 sm:h-6" />
                                </a>
                                <a className="hover:scale-110 transition" href="https://www.facebook.com/www.plumedours.fr" target="_blank" rel="noopener noreferrer">
                                    <Icons src="#icon-facebook" alt="Icon Placeholder" className="w-4 h-4 sm:w-6 sm:h-6" />
                                </a>
                                <a className="hover:scale-110 transition" href="https://github.com/plumedours" target="_blank" rel="noopener noreferrer">
                                    <Icons src="#icon-github" alt="Icon Placeholder" className="w-4 h-4 sm:w-6 sm:h-6" />
                                </a>
                                <a className="hover:scale-110 transition" href="https://discord.gg/kTJPvKAw" target="_blank" rel="noopener noreferrer">
                                    <Icons src="#icon-discord" alt="Icon Placeholder" className="w-4 h-4 sm:w-6 sm:h-6" />
                                </a>
                            </div>

                            <motion.div
                                whileHover={{ rotate: 90 }}
                                whileTap={{
                                    rotate: -90,
                                    borderRadius: "100%"
                                }}
                            >
                                <div className="px-3 items-center">
                                    <button
                                        className="text-neutral-200 flex items-center"
                                        onClick={navbar ? closeMenu : openMenu}
                                    >
                                        {navbar ? (
                                            <Icons src="#icon-menuClosed" alt="Icon Placeholder" className="w-8 h-8 text-red-500" />
                                        ) : (
                                            <Icons src="#icon-menuOpen" alt="Icon Placeholder" className="w-8 h-8 text-neutral-200" />
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-5 items-center">
                    <AnimatePresence>
                        {navbar && (
                            <motion.div
                                initial={{ opacity: 0, x: "-100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: "-100%" }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    width: "100%",
                                    zIndex: 2
                                }}
                                className="pb-3 w-full bg-neutral-900"
                            >
                                <ul className="flex flex-col space-y-1">
                                    <Link to="/" onClick={closeMenu}>
                                        <li className="text-neutral-300 hover:text-neutral-200 hover:bg-neutral-700 p-3">
                                            Accueil
                                        </li>
                                    </Link>
                                    <Link to="/#universes" onClick={handleLinkClick("universes")}>
                                        <li className="text-neutral-300 hover:text-neutral-200 hover:bg-neutral-700 p-3">
                                            Mes univers
                                        </li>
                                    </Link>
                                    <Link to="/#skills" onClick={handleLinkClick("skills")}>
                                        <li className="text-neutral-300 hover:text-neutral-200 hover:bg-neutral-700 p-3">
                                            Compétences
                                        </li>
                                    </Link>
                                    <Link to="/#services" onClick={handleLinkClick("services")}>
                                        <li className="text-neutral-300 hover:text-neutral-200 hover:bg-neutral-700 p-3">
                                            Prestations et services
                                        </li>
                                    </Link>
                                    <Link to="/development" onClick={closeMenu}>
                                        <li className="text-neutral-300 hover:text-neutral-200 hover:bg-neutral-700 p-3">
                                            Développement
                                        </li>
                                    </Link>
                                    <Link to="/gallery" onClick={closeMenu}>
                                        <li className="text-neutral-300 hover:text-neutral-200 hover:bg-neutral-700 p-3">
                                            Galerie photo
                                        </li>
                                    </Link>
                                    <Link to="/modelization" onClick={closeMenu}>
                                        <li className="text-neutral-300 hover:text-neutral-200 hover:bg-neutral-700 p-3">
                                            Modélisation 3D
                                        </li>
                                    </Link>
                                    <Link to="/about" onClick={closeMenu}>
                                        <li className="text-neutral-300 hover:text-neutral-200 hover:bg-neutral-700 p-3">
                                            A propos
                                        </li>
                                    </Link>
                                    <Link to="/contact" onClick={closeMenu}>
                                        <li className="text-neutral-300 hover:text-neutral-200 hover:bg-neutral-700 p-3">
                                            Contact
                                        </li>
                                    </Link>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
