import { useState } from "react";
// import { debounce } from "debounce";

const Filter = ({ onFilter }) => {
  const [filter, setFilter] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFilter(() => value);
  };

  const blurHandler = (event) => {
    event.target.value = "";
    setFilter(() => event.target.value);
  };

  const filterInputHandler = (event) => {
    handleInputChange(event);
    onFilter(filter);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search contact"
        name="filter"
        value={filter}
        onChange={filterInputHandler}
        onBlur={blurHandler}
      />
    </div>
  );
};

export default Filter;
