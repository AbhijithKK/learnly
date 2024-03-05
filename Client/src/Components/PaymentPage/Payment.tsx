import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
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
            <div className="payment-inputbox-only">
              <div className="payment-address">Fill the address</div>
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
          </div>
          <div className="payment-order-details">
            <PaymentCbox hedding="web devolpoment" lesson="15 Lessons" payment="1000" discription="" image=""/>
            <PaymentCbox hedding="web devolpoment" lesson="15 Lessons" payment="1000" discription="" image=""/>
            <PaymentCbox hedding="web devolpoment" lesson="15 Lessons" payment="1000" discription="" image=""/>
          </div>
        </div>

        <div className="payment-section2">
          <div className="payment-coopen-box">
            
            <InputBox
            height="3rem"
            width="80%"
            name="coopenCode"
            placeHolder="Enter Coopen Code"
            type="text"
            value={''}

            />
            <Button bColor="blue"
             name="Apply" 
             height="3rem"
             width="20%"

             />
          </div>
          <div className="payment-order-summery">
            <div className="payment-order-summery-title">
                Summary
            </div>
            <div className="payment-order-summery-items">
                <p>Original Price:</p>
                <p>1000</p>
            </div>
            <div className="payment-order-summery-items">
                <p>Discounts:</p>
                <p>0.00</p>
            </div>
            <hr />

            <div className="payment-order-summery-items">
                <p className="total">Total:</p>
                <p className="price">1000</p>
            </div>
            
          </div>
          <div className="payment-complete-checkout-btn"></div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
