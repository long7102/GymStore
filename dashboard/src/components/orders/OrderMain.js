import React from "react";
import Orders from "./Orders";

const OrderMain = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Đơn hàng</h2>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Trạng thái</option>
                <option>Kích hoạt</option>
                <option>Vô hiệu hoá</option>
                <option>Xem tất cả</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Hiển thị 20</option>
                <option>Hiển thị 30</option>
                <option>Hiển thị 40</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            <Orders />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderMain;
