import React from "react";

const OrderDetailInfo = (props) => {
  const {order} = props
  return (
    <div className="row mb-5 order-info-wrap">
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-user"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Khách hàng</h6>
            <p className="mb-1">
              {order.user.name} <br />
              <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-truck-moving"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Thông tin</h6>
            <p className="mb-1">
              Vận chuyển tới: {order.shippingAddress.city} <br /> Phương thức thanh toán: {order.paymentMethod}
            </p>
            <p className="mb-1">
Số điện thoại: {order.phone}            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-map-marker-alt"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Vận chuyển tới</h6>
            <p className="mb-1">
              Địa chỉ:  {order.shippingAddress.address}, {order.shippingAddress.city}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default OrderDetailInfo;
