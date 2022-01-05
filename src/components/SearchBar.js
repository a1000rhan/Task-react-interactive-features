// Styling

const SearchBar = ({ setQuary }) => {
  return (
    <input
      className="searchBar"
      onChange={(event) => setQuary(event.target.value)}
      placeholder="Search for a cookie name"
    />
  );
};

export default SearchBar;
