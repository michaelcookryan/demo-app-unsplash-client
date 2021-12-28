import React from "react";

import "./searchbox.styles.scss";

// interface Props {
//   placeholder: string;
//   handleChange?: (e: any) => void;
// }
// const SearchBox = ({ placeholder, handleChange }: Props) => (
const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
// SearchBox.defaultProps = {
//   handleChange: undefined,
// };

export default SearchBox;
