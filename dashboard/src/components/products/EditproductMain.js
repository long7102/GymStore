import React from "react";
import Toast from "./../LoadingError/Toast";
import { Link } from "react-router-dom";

const EditProductMain = (props) => {
  const { productId } = props;

  return (
    <>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Chi tiết sản phẩm
            </Link>
            <h2 className="content-title">Cập nhật thông tin</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Chỉnh sửa
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Tên sản phẩm
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập nội dung"
                      className="form-control"
                      id="product_title"
                      required
                      value={productId.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Giá
                    </label>
                    <input
                      type="number"
                      placeholder="Nhập nội dung"
                      className="form-control"
                      id="product_price"
                      required
                      value={productId.price}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Số lượng 
                    </label>
                    <input
                      type="number"
                      placeholder="Nhập nội dung"
                      className="form-control"
                      id="product_price"
                      required
                      value={productId.countInStock}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Mô tả</label>
                    <textarea
                      placeholder="Nhập nội dung"
                      className="form-control"
                      rows="7"
                      required
                      value={productId.description}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Hình ảnh</label>
                    <input
                      className="form-control"
                      type="text"
                      value={productId.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProductMain;
