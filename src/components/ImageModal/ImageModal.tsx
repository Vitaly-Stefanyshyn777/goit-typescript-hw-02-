// import PropTypes from 'prop-types';
// import Modal from 'react-modal';
// import styles from './ImageModal.module.css';

// const ImageModal = ({ isOpen, onClose, imageData }) => {
//   // Modal.setAppElement('#root');

//   const customStyles = {
//     overlay: {
//       backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     },
//     content: {
//       inset: '50% auto auto 50%',
//       transform: 'translate(-50%, -50%)',
//       padding: '0',
//       border: 'none',
//       background: 'transparent',
//     },
//   };

//   if (!imageData || !imageData.url) return null;

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       style={customStyles}
//       contentLabel="Image Modal"
//     >
//       <div className={styles.modalContent}>
//         <button
//           className={styles.closeButton}
//           onClick={onClose}
//           aria-label="Close modal"
//         >
//           ×
//         </button>
//         <img
//           className={styles.modalImage}
//           src={imageData.url}
//           alt={imageData.name || 'Image'}
//           loading="lazy"
//         />
//       </div>
//     </Modal>
//   );
// };

// ImageModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   imageData: PropTypes.shape({
//     url: PropTypes.string.isRequired,
//     name: PropTypes.string,
//   }),
// };

// export default ImageModal;

// ImageModal.tsx
// import PropTypes from 'prop-types';
import Modal from "react-modal";
import styles from "./ImageModal.module.css";
// import React from 'react';

interface ImageData {
  url: string;
  name?: string;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageData?: ImageData;
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    inset: "50% auto auto 50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    background: "transparent",
  },
};

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageData,
}) => {
  if (!imageData || !imageData.url) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <img
          className={styles.modalImage}
          src={imageData.url}
          alt={imageData.name || "Image"}
          loading="lazy"
        />
      </div>
    </Modal>
  );
};

// ImageModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   imageData: PropTypes.shape({
//     url: PropTypes.string.isRequired,
//     name: PropTypes.string,
//   }),
// };

export default ImageModal;
