import "./Product.scss";
import product from "../../../assets/products/earbuds-prod-1.webp";

const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={product} alt="product1" />
      </div>
      <div className="prod-details">
        <span className="name">Product name</span>
        <span className="price">&#8377; 4999</span>
      </div>
    </div>
  );
};

export default Product;
