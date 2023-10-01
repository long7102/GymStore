import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, payOrder } from "../Redux/Actions/OrderActions";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
import moment from 'moment'
import axios from 'axios'
import { ORDER_PAY_RESET } from "../Redux/Constants/OrderConstants";

const OrderScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const [sdkReady, setSdkReady] = useState(false)
  const dispatch = useDispatch()
  const orderId = match.params.id
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails
  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay
  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100)
    }
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal")
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () =>{
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }
    if (!order || successPay) {
      dispatch({type: ORDER_PAY_RESET})
      dispatch(getOrderDetails(orderId))
    } else if (!order.isPaid){
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [dispatch, orderId, successPay, order])

  var successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payOrder(orderId, paymentResult))
  }
  return (
    <>
      <Header />
      <div className="container">
        {
          loading ? (<Loading />) : error ? (<Message variant="alert-danger">{error}</Message>) :
            (
              <>
                <div className="row  order-detail">
                  <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                    <div className="row">
                      <div className="col-md-4 center">
                        <div className="alert-success order-box">
                          <i className="fas fa-user"></i>
                        </div>
                      </div>
                      <div className="col-md-8 center">
                        <h5>
                          <strong>Khách hàng</strong>
                        </h5>
                        <p>Tên người nhận: {order.user.name}</p>
                        <p>
                          <a href={`mailto:${order.user.email}`}>Email: {order.user.email}</a>
                        </p>
                        <p>Số điện thoại: {order.phone}</p>
                      </div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                    <div className="row">
                      <div className="col-md-4 center">
                        <div className="alert-success order-box">
                          <i className="fas fa-truck-moving"></i>
                        </div>
                      </div>
                      <div className="col-md-8 center">
                        <h5>
                          <strong>Thông tin đơn hàng</strong>
                        </h5>
                        <p>Địa chỉ: {order.shippingAddress.address}</p>
                        <p>Phương thức thanh toán: {order.paymentMethod}</p>
                        {
                          order.isPaid ? (
                            <div className="bg-info p-2 col-12">
                              <p className="text-white text-center text-sm-start">
                                Đã thanh toán vào {moment(order.paidtAt).calendar()}
                              </p>
                            </div>
                          ) : (
                            <div className="bg-danger p-2 col-12">
                              <p className="text-white text-center text-sm-start">
                                Chưa thanh toán
                              </p>
                            </div>
                          )
                        }

                      </div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                    <div className="row">
                      <div className="col-md-4 center">
                        <div className="alert-success order-box">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                      </div>
                      <div className="col-md-8 center">
                        <h5>
                          <strong>Vận chuyển tới</strong>
                        </h5>
                        <p>
                          Địa chỉ: {order.shippingAddress.address}, {order.shippingAddress.city}
                        </p>
                        {
                          order.isDelivered ? (
                            <div className="bg-info p-2 col-12">
                              <p className="text-white text-center text-sm-start">
                                Đã nhận hàng vào {moment(order.deliveredAt).calendar()}
                              </p>
                            </div>
                          ) : (
                            <div className="bg-danger p-2 col-12">
                              <p className="text-white text-center text-sm-start">
                                Chưa nhận hàng
                              </p>
                            </div>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row order-products justify-content-between">
                  <div className="col-lg-8">
                    {
                      order.orderItems.length === 0 ? (
                        <Message variant="alert-info mt-5">Chưa có đơn hàng nào</Message>
                      )
                        : (
                          <>
                            {
                              order.orderItems.map((item, index) => (
                                <div className="order-product row" key={index}>
                                  <div className="col-md-3 col-6">
                                    <Link to={`/products/${item.product}`}>
                                      <img src={item.image} alt="{item.name}" />
                                    </Link>
                                  </div>
                                  <div className="col-md-5 col-6 d-flex align-items-center">
                                    <Link to={`/products/${item.product}`}>
                                      <h6>{item.name}</h6>
                                    </Link>
                                  </div>
                                  <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                                    <h4>Số lượng</h4>
                                    <h6>{item.qty}</h6>
                                  </div>
                                  <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                                    <h4>Giá tiền</h4>
                                    <h6>{(item.qty * item.price)} VNĐ</h6>
                                  </div>
                                </div>
                              )
                              )
                            }
                          </>
                        )
                    }
                  </div>
                  {/* total */}
                  <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>
                            <strong>Sản phẩm</strong>
                          </td>
                          <td>{order.itemsPrice} VNĐ</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Phí vận chuyển</strong>
                          </td>
                          <td>{order.shippingPrice} VNĐ</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Tổng</strong>
                          </td>
                          <td>{order.totalPrice}VNĐ</td>
                        </tr>
                      </tbody>
                    </table>
                    {!order.isPaid && (
                      <div className="col-12">
                        {loadingPay && ((<Loading />))}
                        {
                          !sdkReady ? (
                            <Loading />
                          )
                            : (
                              <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler} />
                            )
                        }
                      </div>
                    )}
                  </div>
                </div>
              </>
            )
        }

      </div>
    </>
  );
};

export default OrderScreen;
