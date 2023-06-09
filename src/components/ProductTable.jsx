import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  return (
    <div className="ProductTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>InStock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow key={index} product={product} />
          ))}

          {/* {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.inStock ? 'Yes' : 'No'}</td>
          </tr>
        ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
