import PaymentCbox from "../PaymentCbox/PaymentCob";
import "./Payment.css";

const Payment = () => {
  return (
    <>
      <div className="payment-container">
        <div className="payment-title">Checkout</div>
            <div className="payment-sub-container">

        <div className="payment-section1">
          <div className="payment-address-inputpoxes">
            <div>

            <select name="" id="">
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
            </select>
            </div>
            <div>

            <select name="" id="">
                <option value="">Select State</option>
                <option value="India">Kerala</option>
                <option value="USA">Goa</option>
                <option value="UAE">UP</option>
            </select>
            </div>
          </div>
          <div className="payment-order-details">
            <PaymentCbox hedding="web devolpoment" lesson="15 Lessons" payment="1000" discription="" image=""/>
            {/* <Cbox hedding="web devolpoment" lesson="15 Lessons" payment="1000" discription="" image=""/> */}
          </div>
        </div>

        <div className="payment-section2">
          <div className="payment-order-summery">
            fffffffffffffffffffffff
          </div>
          <div className="payment-coopen-box"></div>
          <div className="payment-complete-checkout-btn"></div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
