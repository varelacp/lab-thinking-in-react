const ProductRow = ({ product }) => {
  const { name, price, category, inStock } = product;

  return (
    <tr style={{ color: inStock ? 'black' : 'red' }}>
      <td>{name}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>{inStock ? 'Yes' : 'No'}</td>
    </tr>
  );
};

export default ProductRow;
