import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Hotline</h5>
            <p>07012002</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Trụ sở</h5>
            <p>235 Hoàng Quốc Việt, Hà Nội</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-clock"></i>
            </div>
            <h5>Giờ làm việc</h5>
            <p>8am to 10pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
