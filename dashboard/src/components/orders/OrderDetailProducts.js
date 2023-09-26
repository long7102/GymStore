import React from "react";
import { Link } from "react-router-dom";

const OrderDetailProducts = () => {
  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Sản phẩm</th>
          <th style={{ width: "20%" }}>Giá</th>
          <th style={{ width: "20%" }}>Số lượng</th>
          <th style={{ width: "20%" }} className="text-end">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Link className="itemside" to="#">
              <div className="left">
                <img
                  src="/images/3.png"
                  alt="product"
                  style={{ width: "40px", height: "40px" }}
                  className="img-xs"
                />
              </div>
              <div className="info">
                Velcro Sneakers For Boys & Girls (Blue){" "}
              </div>
            </Link>
          </td>
          <td>$586 </td>
          <td>3 </td>
          <td className="text-end"> $2534</td>
        </tr>

        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>Subtotal:</dt> <dd>$3,556</dd>
              </dl>
              <dl className="dlist">
                <dt>Giá vận chuyển:</dt> <dd>$56,907</dd>
              </dl>
              <dl className="dlist">
                <dt>Tổng:</dt>
                <dd>
                  <b className="h5">$2,345</b>
                </dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted">Trnsgj thái:</dt>
                <dd>
                  <span className="badge rounded-pill alert alert-success text-success">
                    Thanh toán thành công
                  </span>
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
