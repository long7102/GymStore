import React, { useState } from "react";
import Header from "./../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Actions/CartActions";

const PaymentScreen = ({history}) => {
  window.scrollTo(0, 0);
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  if(!shippingAddress){
    history.push("/shipping")
  }

  const [paymentMethod, setPaymentMethod] = useState(" ")

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    history.push("/placeorder")
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>Chọn hình thức thanh toán</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input className="form-check-input" type="radio" value="Paypal" checked={paymentMethod === "Paypal"} onChange={(e) => setPaymentMethod(e.target.value)} />
              <label className="form-check-label">Paypal</label>
            </div>       
             <div className="radio-container">
              <input className="form-check-input" type="radio" value="Thẻ tín dụng" checked={paymentMethod === "Thẻ tín dụng"} onChange={(e) => setPaymentMethod(e.target.value)} />
              <label className="form-check-label">Thẻ tín dụng</label>
            </div>
            <div className="radio-container">
              <input className="form-check-input" type="radio" value="Thanh toán khi nhận hàng" checked={paymentMethod === "Thanh toán khi nhận hàng"} onChange={(e) => setPaymentMethod(e.target.value)} />
              <label className="form-check-label">Thanh toán khi nhận hàng</label>
            </div>
          </div>

          <button type="submit">
              Tiếp tục
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
