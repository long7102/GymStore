import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
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
        <tr>
          <td>
            <b>Women Red Heels Sandal</b>
          </td>
          <td>user@example.com</td>
          <td>$45,789</td>
          <td>
            <span className="badge rounded-pill alert-success">
              Paid At Today 23:56 AM
            </span>
          </td>
          <td>Dec 12 2021</td>
          <td>
            <span className="badge btn-success">Delivered</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr>
        {/* Not paid Not delivered */}
        <tr>
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
        </tr>
      </tbody>
    </table>
  );
};

export default Orders;
