import products from "../products";

const ProductItem = ({ product, setCookie }) => {
  return (
    <div className="productWrapper">
      <img
        alt={product.name}
        src={product.image}
        onClick={() => setCookie(product)}
      />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
    </div>
  );
};

export default ProductItem;
