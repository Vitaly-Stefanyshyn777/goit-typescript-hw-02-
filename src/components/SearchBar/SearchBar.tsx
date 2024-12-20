// import PropTypes from 'prop-types';
// import toast from 'react-hot-toast';
// import styles from './SearchBar.module.css';

// const SearchBar = ({ onSearch }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const inputValue = e.target.elements.searchInput.value.trim();
//     if (!inputValue) {
//       toast.error('Please enter a search term.', {
//         style: {
//           borderRadius: '8px',
//           background: '#ff4d4d',
//           color: '#fff',
//         },
//       });
//       return;
//     }
//     onSearch(inputValue);
//     e.target.reset();
//   };

//   return (
//     <header className={styles.searchHeader}>
//       <form className={styles.searchForm} onSubmit={handleSubmit}>
//         <input
//           className={styles.searchInput}
//           name="searchInput"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//         <button className={styles.searchButton} type="submit">
//           🔍
//         </button>
//       </form>
//     </header>
//   );
// };

// SearchBar.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// };

// export default SearchBar;

// SearchBar.tsx
// import PropTypes from "prop-types";

// --------------------------- Допрацювати-----------------------------------------

// import toast from "react-hot-toast";
// import styles from "./SearchBar.module.css";
// import React from "react";

// interface SearchBarProp {
//   //   onSearch: () => void | (data: { url: string; name: string }) => void;
//   // };
//   onSearch: (inputValue: string) => void;
//   // onSubmit: (inputValue: { onSubmit: string; name: string }) => void;
// }

// const SearchBar: React.FC<SearchBarProp> = React.memo(({ onSearch }) => {
//   const handleSubmit = (e: {
//     preventDefault: () => void;
//     target: { elements: { searchInput: { value: string } }; reset: () => void };
//   }) => {
//     e.preventDefault();

//     const inputValue = e.target.elements.searchInput.value.trim();
//     if (!inputValue) {
//       toast.error("Please enter a search term.", {
//         style: {
//           borderRadius: "8px",
//           background: "#ff4d4d",
//           color: "#fff",
//         },
//       });
//       return;
//     }
//     onSearch(inputValue);
//     e.target.reset();
//   };

//   return (
//     <header className={styles.searchHeader}>
//       <form className={styles.searchForm} onSubmit={handleSubmit}>
//         <input
//           className={styles.searchInput}
//           name="searchInput"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//         <button className={styles.searchButton} type="submit">
//           🔍
//         </button>
//       </form>
//     </header>
//   );
// });

// // SearchBar.propTypes = {
// //   onSearch: PropTypes.func.isRequired,
// // };

// export default SearchBar;

// --------------------------- Допрацювати-----------------------------------------

import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";
import React from "react";

interface SearchBarProp {
  onSearch: (inputValue: string) => void;
}

const SearchBar: React.FC<SearchBarProp> = React.memo(({ onSearch }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const inputValue = (
      form.elements.namedItem("searchInput") as HTMLInputElement
    ).value.trim();

    if (!inputValue) {
      toast.error("Please enter a search term.", {
        style: {
          borderRadius: "8px",
          background: "#ff4d4d",
          color: "#fff",
        },
      });
      return;
    }

    onSearch(inputValue);
    form.reset();
  };

  return (
    <header className={styles.searchHeader}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.searchButton} type="submit">
          🔍
        </button>
      </form>
    </header>
  );
});

export default SearchBar;
