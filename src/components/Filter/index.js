import { useState } from "react";
const Filter = (props) => {
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setName(`${name}`);
    setValue(value);
  };

  const filterInputHandler = (event) => {
    handleInputChange(event);
    props.onFilter(filter);
  };

  const blurHandler = (event) => {
    event.target.value = "";
    setFilter(event.target.value);
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
