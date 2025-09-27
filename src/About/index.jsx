import PageTransition from "../components/PageTransition";

function About() {
    return (
        <div className="w-11/12 mx-auto py-5">
            <PageTransition>
                <div className="my-5">
                    <h1 className="text-center text-2xl text-neutral-200 font-semibold">À Propos de Moi</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-center md:col-span-1 self-center">
                        <img
                            src="/portfolio/images/portrait.webp"
                            alt="Portrait Maxime Bory"
                            className="w-1/3 md:w-1/2 h-auto shadow-md shadow-neutral-500"
                        />
                    </div>
                    <div className="md:col-span-1 text-neutral-400">
                        <p className="text-lg">
                            Bienvenue sur mon portfolio ! Je suis Maxime, un développeur passionné avec une variété de compétences et d'expériences dans le domaine de la technologie. Mon travail comprend :
                        </p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Développement d'applications web et web mobile.</li>
                            <li>Création de jeux et d'applications Android en utilisant des outils "no code".</li>
                            <li>Une galerie de mes photographies préférées que j'ai prises lors de mes voyages et aventures.</li>
                            <li>Modélisation 3D avec SketchUp pour créer des plans de maisons, d'appartements et de meubles.</li>
                        </ul>
                        <p className="mt-4 text-lg">
                            Mon objectif est de créer des solutions innovantes et inspirantes à travers la technologie. J'adore apprendre de nouvelles choses et relever des défis techniques. N'hésitez pas à explorer mon portfolio pour voir certains de mes projets précédents et à me contacter si vous souhaitez travailler ensemble !
                        </p>
                    </div>
                </div>
            </PageTransition>
        </div>
    );
}

export default About;