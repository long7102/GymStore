import React from "react";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { Link } from "react-router-dom/cjs/react-router-dom";
import moment from "moment";
const Orders = (props) => {
  const {loading, error, orders} = props
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      {
        loading ? (
          <Loading/>
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) :
        (
          <>
          {
            orders.length === 0 ? (
              <div className="col-12 alert alert-info text-center mt-3">
        Chưa có đơn hàng
        <Link
          className="btn btn-success mx-2 px-3 py-2"
          to="/"
          style={{
            fontSize: "12px",
          }}
        >
          Bắt đầu mua hàng
        </Link>
      </div>
            )
            :
            (
              <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Mã đơn</th>
              <th>Trạng thái</th>
              <th>Thời gian</th>
              <th>Tổng</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order) => (
                <tr className={`${order.isPaid ? "alert-success" : "alert-danger"}`} key={order._id}>
              <td>
                <a href={`/order/${order._id}`} className="link">
                  {order._id}
                </a>
              </td>
              <td>{order.isPaid  ? <>Đã thanh toán</> : <>Chưa thanh toán</>}</td>
              <td>{order.isPaid ? moment(order.paidAt).calendar() : moment(order.createdAt).calendar()}</td>
              <td>{order.totalPrice} VNĐ</td>
            </tr>
              ))
            }
            
          </tbody>
        </table>
      </div>
            )
          }
          </>
        )
      }


      
    </div>
  );
};

export default Orders;