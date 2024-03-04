import "./Payment.css";

const Payment = () => {
  return (
    <>
      <div className="payment-container">
        <div className="payment-title">Checkout</div>
        
        <div className="payment-section1">
          <div className="payment-address-inputpoxes"></div>
          <div className="payment-order-details"></div>
        </div>

        <div className="payment-section2">
          <div className="payment-order-summery"></div>
          <div className="payment-coopen-box"></div>
          <div className="payment-complete-checkout-btn"></div>
        </div>
      </div>
    </>
  );
};

export default Payment;
