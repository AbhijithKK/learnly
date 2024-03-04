import './Cart.css'

const Cart = () => {
    const arr=[1,2,3,4,5,6,7,8]
  return (
    <>
      {/* empty cart */}
      <div className="cart-container">
        <div className="cart-items-count">
            {
                arr.length+' Courses in Cart'
            }
        </div>
        <div className="cart-items">
            
        </div>
      </div>
    </>
  )
}

export default Cart
