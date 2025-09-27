import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import TitleDivider from "../components/commons/TitleDivider";
import { TopBlockSeparator, BottomBlockSeparator } from "../components/commons/BlockSeparator";
import Icons from '../components/commons/Icons';
import './Home.css';
import CardUniverses from '../components/commons/CardUniverses';
import DevText from './UniversesTexts/DevText';
import GalleryText from './UniversesTexts/GalleryText';
import ModelText from './UniversesTexts/ModelText';
import DevLottie from '../assets/lotties/devLottie.json';
import GalleryLottie from '../assets/lotties/galleryLottie.json';
import ModelLottie from '../assets/lotties/modelLottie.json';

function Universes() {
  return (
    <div>
      <TopBlockSeparator />
      <div className="w-11/12 sm:w-10/12 mx-auto py-10">
        <TitleDivider title="Mes univers" classNameBgColor="bg-neutral-200" classNameColor="text-neutral-200" />
        <div className='flex justify-center'>
          <Tabs>
            <TabList>
              <Tab>
                <div className='flex flex-row gap-2 text-xs md:text-base items-center'>
                  <p>Développement</p>
                  <Icons src="#icon-code" alt="Icon Placeholder" className="w-4 h-4 md:w-6 sm:h-6" />
                </div>
              </Tab>
              <Tab>
                <div className='flex flex-row gap-2 text-xs md:text-base items-center'>
                  <p>Galerie photo</p>
                  <Icons src="#icon-camera" alt="Icon Placeholder" className="w-4 h-4 md:w-6 sm:h-6" />
                </div>
              </Tab>
              <Tab>
                <div className='flex flex-row gap-2 text-xs md:text-base items-center'>
                  <p>Modélisation 3D</p>
                  <Icons src="#icon-sketchup" alt="Icon Placeholder" className="w-4 h-4 md:w-6 sm:h-6" />
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <CardUniverses lottieSrc={DevLottie} text={<DevText />} btn="/development" />
            </TabPanel>
            <TabPanel>
              <CardUniverses lottieSrc={GalleryLottie} text={<GalleryText />} btn="/gallery" />
            </TabPanel>
            <TabPanel>
              <CardUniverses lottieSrc={ModelLottie} text={<ModelText />} btn="/modelization" />
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <BottomBlockSeparator />
    </div>
  );
}

export default Universes;