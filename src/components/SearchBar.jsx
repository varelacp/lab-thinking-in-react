const SearchBar = ({ handleSearch, handleStockChange, showInStock }) => {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <label>
        <input
          type="checkbox"
          checked={showInStock}
          onChange={handleStockChange}
        />
        only show products in stock
      </label>
    </div>
  );
};

export default SearchBar;
