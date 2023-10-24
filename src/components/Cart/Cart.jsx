import "./Cart.scss";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import CartItem from "../Cart/CartItem/CartItem";

const Cart = ({setShowCart}) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {/* 
        <div className="empty-cart">
          <BsCartX />
          <span>No Products in Cart.</span>
          <button className="return-cta">RETURN TO SHOP</button>
        </div> 
    */}

        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Sub Toatl :</span>
              <span className="text total"> &#8377; 4999</span>
            </div>
            <div className="button">
              <button className="checkout-cta">CheckOut</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
