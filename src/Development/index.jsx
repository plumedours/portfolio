import { Link } from "react-scroll";

import CardDev from "../components/commons/CardDev";
import { developmentData } from "../components/commons/devProjects";
import ScrollToTopButton from "../components/commons/ScrollToTopButton";

function filterDevelopmentDataByCategory(category) {
  return developmentData.filter((dev) => dev.category === category);
}

function DevelopmentPage() {

  const categories = [...new Set(developmentData.map((dev) => dev.category))];
  const categoriesToDisplay = ["Applications web", "Jeux par navigateur", "Applications Android", "Jeux Android"];

  return (
    <div className="w-11/12 mx-auto py-5">
      <div className="my-5">
        <h1 className="text-center text-2xl text-neutral-200 font-semibold">Développement web, mobile et jeux</h1>
      </div>

      <nav className="mt-10 w-9/12 mx-auto">
        <ul className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <li key={category}>
              <Link
                to={category}
                className="bg-primary-blue-dark px-3 py-1 mt-5 uppercase text-xs font-semibold hover:bg-primary-blue text-neutral-50 transition-all cursor-pointer"
                spy={true}
                smooth={true}
                offset={-100} // Vous pouvez ajuster ce décalage si nécessaire
                duration={800}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {categoriesToDisplay.map((category) => (
        <div key={category} className='my-5 p-5 '>
          <h2 id={category} className="text-xl text-neutral-200 font-semibold bg-primary-blue-dark bg-opacity-50 p-3">{category}</h2>
          <div className='mx-auto max-w-screen-2xl columns-1 gap-4 p-4 md:columns-2 lg:columns-3'>
            {filterDevelopmentDataByCategory(category).map((dev, index) => (
              <CardDev
                key={index}
                imgSrc={dev.imgSrc}
                btns={dev.btns}
                title={dev.title}
                icons={dev.icons}
                desc={dev.desc}
              />
            ))}
          </div>
        </div>
      ))}
      <ScrollToTopButton />
    </div>
  );
}

export default DevelopmentPage;