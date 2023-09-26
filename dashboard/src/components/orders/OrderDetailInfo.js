import React from "react";

const OrderDetailInfo = () => {
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
              User Adamu <br />
              <a href={`mailto:user@example.com`}>user@example.com</a>
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
              Vận chuyển tới: Tanzania <br /> Phương thức thanh toán: PayPal
            </p>
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
              Địa chỉ: Arusha
              <br />
              Ngaramtoni Crater
              <br /> P.O Box Arusha Tz 1234
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default OrderDetailInfo;
