import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import imageSize from 'image-size';

const imageFolderOriginal = './public/images/gallery/original'; // Chemin vers le dossier contenant les images originales
const imageFolderThumbnail = './public/images/gallery/thumbnail'; // Chemin vers le dossier contenant les images miniatures
const outputFilePath = './src/photosData.js'; // Chemin vers le fichier de données de photos

const imageFileNames = readdirSync(imageFolderOriginal);

const photosData = imageFileNames.map((filename) => {
  const originalImagePath = join(imageFolderOriginal, filename);
  const thumbnailImagePath = join(imageFolderThumbnail, filename);
  const dimensions = imageSize(originalImagePath);

  return {
    original: `/images/gallery/original/${filename}`,
    thumbnail: `/images/gallery/thumbnail/${filename}`,
    width: dimensions.width,
    height: dimensions.height,
    alt: 'Image alt text',
    caption: 'Image caption',
  };
});

writeFileSync(outputFilePath, `export const photosData = ${JSON.stringify(photosData, null, 2)};`);
console.log(`Data written to ${outputFilePath}`);

// Taper la commande 'node generatePhoto.js' dans le terminal pour générer le fichier de données de photos