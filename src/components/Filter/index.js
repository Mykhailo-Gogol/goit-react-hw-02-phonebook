import { useState } from "react";



const Filter = ({onFilter}) => {
  const [filter, setFilter] = useState({
    filter: ""
  })
  

  const handleInputChange = (event) => {
    const { value } = event.target;

    setFilter({
      filter: value
    })
  };

  const filterInputHandler = (event) => {
    handleInputChange(event);
    onFilter(filter.filter);
  };

  const blurHandler = (event) => {
    event.target.value = "";
    setFilter({ filter: event.target.value});
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search contact"
        name="filter"
        value={filter.filter}
        onChange={filterInputHandler}
        onBlur={blurHandler}
      />
    </div>
  );
};

export default Filter;
