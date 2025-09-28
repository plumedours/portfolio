import TitleDivider from "../components/commons/TitleDivider";
import IconAndroid from '../assets/icons/android.svg';
import IconCss from '../assets/icons/css.svg';
import IconHtml from '../assets/icons/html.svg';
import IconJs from '../assets/icons/javascript.svg';
import IconExcel from '../assets/icons/excel.svg';
import IconWord from '../assets/icons/word.svg';
import IconFigma from '../assets/icons/figma.svg';
import IconLightroom from '../assets/icons/lightroom.svg';
import IconPhotoshop from '../assets/icons/photoshop.svg';
import IconMac from '../assets/icons/mac.svg';
import IconWindows from '../assets/icons/windows.svg';
import IconReact from '../assets/icons/react.svg';
import IconSymfony from '../assets/icons/symfony.svg';
import IconWordpress from '../assets/icons/wordpress.svg';
import IconTailwindcss from '../assets/icons/tailwindcss.svg';
import IconPhp from '../assets/icons/php.png';
import IconsSkills from "../components/commons/IconsSkills";
import IconElementor from "../assets/icons/elementor.svg";
import IconCsharp from "../assets/icons/csharp.svg";

function Skills() {
  return (
    <div className="bg-neutral-200">
      <div className="w-11/12 sm:w-10/12 mx-auto py-10">
        <TitleDivider title="Mes compétences" classNameBgColor="bg-neutral-700" classNameColor="text-neutral-700" />
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="flex flex-col items-center gap-5 border shadow-md shadow-neutral-600 border-neutral-300 p-3">
            <div className="flex">
              <p className="text-lg font-semibold">Développement</p>
            </div>
            <div className="flex flex-row gap-5 justify-center">
              <div className="flex flex-col">
                <IconsSkills src={IconHtml} alt="" className="" iconName="HTML" />
                <IconsSkills src={IconCss} alt="" className="" iconName="CSS" />
                <IconsSkills src={IconJs} alt="" className="" iconName="JavaScript" />
                <IconsSkills src={IconReact} alt="" className="" iconName="React" />
                <IconsSkills src={IconCsharp} alt="" className="" iconName="C#" />
              </div>
              <div className="flex flex-col">
                <IconsSkills src={IconTailwindcss} alt="" className="" iconName="Tailwindcss" />
                <IconsSkills src={IconPhp} alt="" className="" iconName="PHP" />
                <IconsSkills src={IconSymfony} alt="" className="" iconName="Symfony" />
                <IconsSkills src={IconWordpress} alt="" className="" iconName="Wordpress" />
                <IconsSkills src={IconElementor} alt="" className="" iconName="Elementor" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 border shadow-md shadow-neutral-600 border-neutral-300 p-3">
            <div className="flex">
              <p className="text-lg font-semibold">Autre</p>
            </div>
            <div className="flex flex-row gap-5 justify-center">
              <div className="flex flex-col">
                <IconsSkills src={IconAndroid} alt="" className="" iconName="Android" />
                <IconsSkills src={IconMac} alt="" className="" iconName="Mac" />
                <IconsSkills src={IconWindows} alt="" className="" iconName="Windows" />
                <IconsSkills src={IconExcel} alt="" className="" iconName="Excel" />
              </div>
              <div className="flex flex-col">
                <IconsSkills src={IconWord} alt="" className="" iconName="Word" />
                <IconsSkills src={IconFigma} alt="" className="" iconName="Figma" />
                <IconsSkills src={IconLightroom} alt="" className="" iconName="Lightroom" />
                <IconsSkills src={IconPhotoshop} alt="" className="" iconName="Photoshop" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;