import { RootState } from "@/pages/reduxStore/store";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart);

  return (
    <div className="cartContainer">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;