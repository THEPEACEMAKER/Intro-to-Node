import "./App.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBar;

// controlled or uncontrolled input
