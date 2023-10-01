import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment'

const Orders = (props) => {
  const {orders} = props
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Tên</th>
          <th scope="col">Email</th>
          <th scope="col">Tổng</th>
          <th scope="col">Đã thanh toán</th>
          <th scope="col">Thời gian</th>
          <th>Trạng thái</th>
          <th scope="col" className="text-end">
            Chi tiết
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
            <tr key={order._id}>
            <td>
              <b>{order.user.name}</b>
            </td>
            <td>{order.user.email}</td>
            <td>{order.totalPrice} VNĐ</td>
            <td>
              {
                order.isPaid ? (
                  <span className="badge rounded-pill alert-success">
                  Thanh toán vào {moment(order.paidAt).format("Do MMM YY")}
                </span>
                )
                :
                (
                  <span className="badge rounded-pill alert-danger">
                  Chưa thanh toán
                </span>
                )
              }
            </td>
            <td>{moment(order.createdAt).format("Do MMM YY")}</td>
            <td>
            {
                order.isDelivered ? (
                  <span className="badge btn-success">Đã nhận hàng</span>

                )
                :
                (
                  <span className="badge btn-danger">Chưa nhận hàng</span>
                )
              }
            </td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order/${order._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
          ))
        }

        {/* Not paid Not delivered */}
        {/* <tr>
          <td>
            <b>Velcro Sneakers For Boys & Girls (Blue)</b>
          </td>
          <td>user@example.com</td>
          <td>$45,789</td>
          <td>
            <span className="badge rounded-pill alert-danger">Not paid</span>
          </td>
          <td>Dec 12 2021</td>
          <td>
            <span className="badge btn-dark">Chưa vận chuyển</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Orders;
