import TitleDivider from "../components/commons/TitleDivider";
import { TopBlockSeparator, BottomBlockSeparator } from "../components/commons/BlockSeparator";
import IconsServices from "../components/commons/IconsServices";
import IconDevelopment from "../assets/icons/development.svg";
import IconSupport from "../assets/icons/support.svg";
import IconPhoto from "../assets/icons/photography.svg";
import IconPlan from "../assets/icons/plan.svg";
import DevText from "./ServicesTexts/DevText";
import SupportText from "./ServicesTexts/SupportText";
import PhotoText from "./ServicesTexts/PhotoText";
import PlanText from "./ServicesTexts/PlanText";
import Button from "../components/commons/Button";

function Services() {
    return (
        <div>
            <TopBlockSeparator />
            <div className="w-11/12 sm:w-10/12 md:w-9/12 mx-auto py-10">
                <TitleDivider title="Prestations et services" classNameBgColor="bg-neutral-200" classNameColor="text-neutral-200" />
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <IconsServices src={IconDevelopment} alt="" className="" title="Création de site web" description={<DevText />} />
                        <IconsServices src={IconSupport} alt="" className="" title="Support et maintenance" description={<SupportText />} />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <IconsServices src={IconPhoto} alt="" className="" title="Photographie" description={<PhotoText />} />
                        <IconsServices src={IconPlan} alt="" className="" title="Conseils et planification" description={<PlanText />} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-5">
                    <p className="text-center text-neutral-200 text-sm">N'hésitez pas à me contacter pour obtenir des informations détaillées, des devis personnalisés ou pour discuter de la manière dont je pourrai vous servir au mieux.</p>
                    <Button src="/contact" text="Contactez-moi" />
                </div>
            </div>
            <BottomBlockSeparator />
        </div>
    );
}

export default Services;