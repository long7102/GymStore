import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../Redux/Actions/CartActions";

const ShippingScreen = ({history}) => {
  window.scrollTo(0, 0);
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [phone, setPhone] = useState(shippingAddress.phone)
  const [note, setNote] = useState(shippingAddress.note)
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({address,city,phone,note}))
    history.push("/payment")
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>Thông tin đơn hàng</h6>
          <input type="text" placeholder="Nhập địa chỉ" required value={address} onChange={(e) => setAddress(e.target.value)}/>
          <input type="text" placeholder="Nhập thành phố" required value={city} onChange={(e) => setCity(e.target.value)}/>
          <input type="number" placeholder="Số điện thoại nhận hàng" required value={phone} onChange={(e) => setPhone(e.target.value)}/>
          <input type="text" placeholder="Ghi chú" value={note} onChange={(e) => setNote(e.target.value)}/>
          <button type="submit">
            <Link to="/payment" className="text-white">
              Tiếp tục
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
