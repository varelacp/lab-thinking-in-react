import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showInStock, setShowInStock] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStockChange = () => {
    setShowInStock(!showInStock);
  };

  const filteredProducts = products.filter((product) => {
    if (showInStock) {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.inStock
      );
    } else {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  return (
    <div className="ProductsPage">
      <header className="header">
        <h1>IronStore</h1>
      </header>

      <SearchBar
        handleSearch={handleSearch}
        handleStockChange={handleStockChange}
        showInStock={showInStock}
      />

      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
