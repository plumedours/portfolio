import { useState, useEffect } from "react";
import Icons from "./Icons";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Écouteur d'événement pour détecter le défilement de la page
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Ajoutez un gestionnaire d'événements pour le défilement de la page lors de la montée en flèche
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Ajoutez un défilement fluide pour une transition en douceur
    });
  };

  useEffect(() => {
    // Ajoutez un gestionnaire d'événements pour le défilement de la page
    window.addEventListener("scroll", handleScroll);

    // Retirez le gestionnaire d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div onClick={scrollToTop}
      className={`${
        isVisible ? "fixed bottom-3 right-3" : "hidden"
      } z-50 cursor-pointer`}
    >
        <Icons src="#icon-up" alt="Icon Arrow Up" className="w-16 h-16 bg-primary-blue-dark bg-opacity-50 rounded-full hover:bg-primary-blue hover:bg-opacity-50 text-neutral-50 hover:text-neutral-200 transition p-3 text-center" />
    </div>
  );
}

export default ScrollToTopButton;
