// import PropTypes from 'prop-types';
// import styles from './ImageGallery.module.css';

// import ImageCard from '../ImageCard/ImageCard';

// const ImageGallery = ({ images, onOpenModal }) => {
//   if (!images || images.length === 0) {
//     return <p className={styles.noImagesText}>No images found.</p>;
//   }

//   return (
//     <ul className={styles.gallery}>
//       {images.map((item) => (
//         <ImageCard key={item.id} imageData={item} onOpenModal={onOpenModal} />
//       ))}
//     </ul>
//   );
// };

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     })
//   ).isRequired,
//   onOpenModal: PropTypes.func.isRequired,
// };

// export default ImageGallery;

// // ImageGallery.tsx
// import PropTypes from 'prop-types';
import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import React from "react";

interface ImageData {
  // images: string | number;
  // length: string | number;
  id: string;
  urls: {
    full: string;
    small: string;
  };
  description?: string;
  likes?: number;
}

interface ImageGalleryProps {
  images: ImageData[];
  onOpenModal: (data: { url: string; name: string }) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = React.memo(
  ({ images, onOpenModal }) => {
    if (!images || images.length === 0) {
      return <p className={styles.noImagesText}>No images found.</p>;
    }

    return (
      <ul className={styles.gallery}>
        {images.map((item) => (
          <ImageCard key={item.id} imageData={item} onOpenModal={onOpenModal} />
        ))}
      </ul>
    );
  }
);

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     })
//   ).isRequired,
//   onOpenModal: PropTypes.func.isRequired,
// };

export default ImageGallery;
