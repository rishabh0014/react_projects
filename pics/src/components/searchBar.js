import { useState } from "react";

function SearchBar(props) {
  const { onSubmit } = props;

  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} placeholder="Search" />
      </form>
    </div>
  );
}

export default SearchBar;
