import Button from "../Button/Button";
import Cbox from "../CourseBox/Cbox";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";

const Cart = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
    <Navbar/>
      {/* empty cart */}
      <div className="cart-container">
        <div className="cart-items-count">
          <p>{arr.length + " Courses in Cart"}</p>
          
        </div>
        <div className="cart-total-prize">
        <span>Total: &nbsp;</span>  <p> ₹ 50000</p>
        </div>
        <div className="cart-items">
          <div className="cart-item-ind">
            <Cbox
              discription="hruightrgtuighrthtitubhtriubir
            uurnbruibnghbhhghghggh"
              hedding="JS full course"
              image=""
              lesson=""
              payment="1000"
            />
          </div>
          <div className="cart-item-ind">
            <Cbox
              discription="hruightrgtuighrthtitubhtriubir
            uurnbruibnghbhhghghggh"
              hedding="JS full course"
              image=""
              lesson=""
              payment="1000"
            />
          </div>
          <div className="cart-item-ind">
            <Cbox
              discription="hruightrgtuighrthtitubhtriubir
            uurnbruibnghbhhghghggh"
              hedding="JS full course"
              image=""
              lesson="15"
              payment="1000"
            />
          </div>
        </div>

        <div className="cart-checkout-btn">
            <Button bColor="blue" height="3rem" name="Checkout" width="70%" />
        </div>
      </div>

      <div className="cart-footer">
        <Footer/>
      </div>
    </>
  );
};

export default Cart;
