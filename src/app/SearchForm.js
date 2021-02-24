import React, {useState } from "react";
import PropTypes from "prop-types";

const SearchForm = ({onSearch}) => {
  const [searchStr, setSearchStr] = useState('');

  const handleChange = (ev) => {
    setSearchStr(ev.target.value);
    if (typeof onSearch === 'function') {
      onSearch(ev.target.value);
    }
  }

  return (
    <div className="emoji-search">
      <label>
        Search: <input type="text" value={searchStr} placeholder="Search your emoji" onChange={handleChange} />
      </label>
    </div>
  );
}

export default SearchForm;