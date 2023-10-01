import React, { useEffect } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removefromcart } from "../Redux/Actions/CartActions";

const CartScreen = ({match, location, history}) => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch()
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split("=")[1]) : 1
  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart
  const total = cartItems.reduce((a,i) => a + i.qty * i.price, 0)
  useEffect(() => { 
    if(productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])
  const checkedOutHandler = () => {
    history.push("/login?redirect=shipping")
  }
  const removeFromCartHandler = (id) => {
    dispatch(removefromcart(id))
    alert("Xoá sản phẩm thành công")
  }
  return (
    <>
      <Header />
      {/* Cart */}
      <div className="container">
        {
          cartItems.length === 0 ?
           ( 

            <div className=" alert alert-info text-center mt-3">
          <h2>Bạn chưa có sản phẩm nào trong giỏ hàng</h2>
          <Link
            className="btn btn-success mx-5 px-5 py-3"
            to="/"
            style={{
              fontSize: "17px",
            }}
          >
            Mua hàng ngay
          </Link>
        </div>

            ) 
            : 
            (
              <>
              <div className=" alert alert-info text-center mt-3">
          <h3>Giỏ hàng 
          <Link className="text-success mt-2" to="/cart">
            ({cartItems.length})
          </Link> </h3>
        </div>
        {/* cartiterm */}
        {
          cartItems.map((item) => (
            <div className="cart-iterm row">
          <div onClick={() => removeFromCartHandler(item.product)} className="remove-button d-flex justify-content-center align-items-center">
            <i className="fas fa-times"></i>
          </div>
          <div className="cart-image col-md-3">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="cart-text col-md-5 d-flex align-items-center">
            <Link to={`/products/${item.product}`}>
              <h4>{item.name}</h4>
            </Link>
          </div>
          <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
            <h6>Số lượng</h6>
            <select 
            value={item.qty}
             onChange={(e)=> dispatch(addToCart(item.product, Number(e.target.value)))}>
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
          </div>
          <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
            <h6>Giá thành</h6>
            <h4>{item.price}VNĐ</h4>
          </div>
        </div>
          ))
        }
        

        {/* End of cart iterms */}
        <div className="total">
          <span className="sub">Tổng:</span>
          <span className="total-price">{total} VNĐ</span>
        </div>
        <hr />
        <div className="cart-buttons d-flex align-items-center row">
          <Link to="/" className="col-md-6 ">
            <button><h5>Tiếp tục mua hàng</h5></button>
          </Link>
          {
            total > 0 && (
              <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
            <button onClick={checkedOutHandler}>
                <h5>Thanh toán</h5>

            </button>
          </div>
            )
          }
          
        </div>
              </>
            )
        }
        
      </div>
      <Footer/>
    </>
  );
};

export default CartScreen;
