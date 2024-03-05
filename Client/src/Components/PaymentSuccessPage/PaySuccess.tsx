import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './PaymentSuccess.css'

const PaySuccess = () => {
  return (
   <>
   <Navbar/>
    <div className='paymentSuceess-page'>
      <div className="card">
      <div className='payment-success-tick' style={{
      borderRadius:"200px",
       height:"200px",
        width:"200px",
         background:" #F8FAF5" ,
         margin:"0 auto;"}}>
        <i className="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
      </div>
    </div>
    <div className="payment-success-footer">
        <Footer/>
    </div>
    </>
  )
}

export default PaySuccess
