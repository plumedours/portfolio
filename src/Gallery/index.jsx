import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { photosData } from '../components/photosData.js';
import Icons from '../components/commons/Icons';

function PhotoGallery() {

  const smallItemStyles = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
  };

  const preloadOptions = {
    // Configurez le nombre d'images à précharger avant et après l'image actuellement affichée.
    // Par exemple, preloadCount: 2 préchargera 2 images avant et 2 images après l'image actuelle.
    preloadCount: 2,
  };

  return (
    <div className="w-11/12 mx-auto py-5">
      <div className="my-5">
        <h1 className="text-center text-2xl text-neutral-200 font-semibold">Galerie photos</h1>
      </div>
      <Gallery id='gallery' preload={preloadOptions}>
        <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2'>
          {photosData.map((photo, index) => (
            <div key={index} className='break-inside-avoid relative cursor-pointer py-1'>
              <Item
                original={photo.original}
                thumbnail={photo.thumbnail}
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
                caption={photo.caption}
              >
                {({ ref, open }) => (
                  <div className='relative group'>
                    <img
                      style={smallItemStyles}
                      className='w-full h-auto'
                      src={photo.thumbnail}
                      ref={ref}
                      loading='lazy'
                    />
                    <div onClick={open} className='absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100'>
                      <Icons src='#icon-view' alt='Icon View' className='w-10 h-10 text-neutral-100 opacity-50 group-hover:opacity-100' />
                    </div>
                  </div>
                )}
              </Item>
            </div>
          ))}
        </div>
      </Gallery>
    </div>
  );

}

export default PhotoGallery;