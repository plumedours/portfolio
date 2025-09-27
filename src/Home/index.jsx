import { useEffect } from "react";
import { scroller } from "react-scroll";
import { useLocation } from "react-router-dom";

import PageTransition from "../components/PageTransition";
import Header from "./Header";
import Universes from "./Universes";
import Skills from "./Skills";
import Services from "./Services";

function Home() {

    const location = useLocation();

    useEffect(() => {
        // Vérifiez s'il y a un ancrage dans l'URL
        const hash = window.location.hash;

        if (hash) {
            // Utilisez react-scroll si vous êtes sur la page d'accueil
            if (location.pathname === "/") {
                scroller.scrollTo(hash.slice(1), {
                    duration: 500,
                    offset: -70,
                    smooth: true,
                });
            } else {
                // Utilisez react-router-dom si vous êtes sur une autre page
                window.location.href = `${location.pathname}${hash}`;
            }
        }
    }, [location.pathname]);

    return (
        <div className="w-full">
            <PageTransition>
                <div id="home"></div>
                <Header />
                <div id="universes"></div>
                <Universes />
                <div id="skills"></div>
                <Skills />
                <div id="services"></div>
                <Services />
            </PageTransition>
        </div>
    );
}

export default Home;