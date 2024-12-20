// import PropTypes from 'prop-types';
// import styles from './ErrorMessage.module.css';

// const ErrorMessage = ({ message = 'An unexpected error occurred. Please try again later.' }) => {
//   return (
//     <div className={styles.errorContainer}>
//       <p className={styles.errorText}>{message}</p>
//     </div>
//   );
// };

// ErrorMessage.propTypes = {
//   message: PropTypes.string,
// };

// export default ErrorMessage;

// ErrorMessage.tsx
// import PropTypes from "prop-types";
import styles from "./ErrorMessage.module.css";
import React from "react";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = React.memo(
  ({
    message = "An unexpected error occurred. Please try again later.",
  }: ErrorMessageProps): JSX.Element => {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorText}>{message}</p>
      </div>
    );
  }
);

// ErrorMessage.propTypes = {
//   message: PropTypes.string,
// };

export default ErrorMessage;
