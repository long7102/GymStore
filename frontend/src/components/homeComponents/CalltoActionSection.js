import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Không muốn bỏ lỡ thông tin ?</h2>
              <p>Đăng ký ngay và nhận thông tin mới nhất</p>
              <form className="form-section">
                <input placeholder="Nhập email của bạn" name="email" type="email" />
                <input value="Đăng ký ngay" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
