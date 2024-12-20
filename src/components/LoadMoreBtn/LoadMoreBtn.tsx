// import PropTypes from 'prop-types';
// import styles from './LoadMoreBtn.module.css';

// const LoadMoreBtn = ({ onLoadMore, label = 'Load More' }) => {
//   return (
//     <div className={styles.buttonContainer}>
//       <button className={styles.loadMoreButton} onClick={onLoadMore} type="button">
//         {label}
//       </button>
//     </div>
//   );
// };

// LoadMoreBtn.propTypes = {
//   onLoadMore: PropTypes.func.isRequired,
//   label: PropTypes.string,
// };

// export default LoadMoreBtn;

// LoadMoreBtn.tsx
// import PropTypes from 'prop-types';
import styles from "./LoadMoreBtn.module.css";
import React from "react";

interface LoadBtnProp {
  onLoadMore: () => void;
  label?: string;
}

const LoadMoreBtn: React.FC<LoadBtnProp> = React.memo(
  ({ onLoadMore, label = "Load More" }) => {
    return (
      <div className={styles.buttonContainer}>
        <button
          className={styles.loadMoreButton}
          onClick={onLoadMore}
          type="button"
        >
          {label}
        </button>
      </div>
    );
  }
);

// LoadMoreBtn.propTypes = {
//   onLoadMore: PropTypes.func.isRequired,
//   label: PropTypes.string,
// };

export default LoadMoreBtn;
