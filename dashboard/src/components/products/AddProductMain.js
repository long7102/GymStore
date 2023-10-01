import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { toast } from "react-toastify";
import { PRODUCT_CREATE_RESET } from "../../Redux/Constants/ProductConstants";
import { createProduct } from "../../Redux/Actions/ProductActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 3000,
}
const AddProductMain = () => {

  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [brand, setBrand] = useState("")
  const [image, setImage] = useState("")
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState("")
  const dispatch = useDispatch()

  const productCreate = useSelector((state) => state.productCreate)
  const {loading, error, product} = productCreate
  
  useEffect(()=>{
    if(product){
      toast.success("Thêm sản phẩm thành công",ToastObjects)
      dispatch({type: PRODUCT_CREATE_RESET})
      setName("")
      setDescription("")
      setCountInStock(0)
      setImage("")
      setPrice(0)
      setBrand("Không")
    }
  }, [product, dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createProduct(name, price, brand, description, image, countInStock))
  }
  return (
    <>
    <Toast/>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Sản phẩm
            </Link>
            <h2 className="content-title">Thêm sản phẩm</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Thêm mới
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading/>}
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Tên sản phẩm
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập tên sản phẩm"
                      className="form-control"
                      id="product_title"
                      required
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Giá
                    </label>
                    <input
                      type="number"
                      placeholder="Nhập giá"
                      className="form-control"
                      id="product_price"
                      required
                      value={price}
                      onChange={(e)=>setPrice(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="brand" className="form-label">
                      Thương hiệu
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập thương hiệu"
                      className="form-control"
                      id="product_price"
                      required
                      value={brand}
                      onChange={(e)=>setBrand(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Số lượng
                    </label>
                    <input
                      type="number"
                      placeholder="Nhập số lượng"
                      className="form-control"
                      id="product_price"
                      required
                      value={countInStock}
                      onChange={(e)=>setCountInStock(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Mô tả</label>
                    <textarea
                      placeholder="Nhập nội dung"
                      className="form-control"
                      rows="7"
                      required
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Hình ảnh</label>
                    <input
                      className="form-control"
                      placeholder="Nhập liên kết đến hình ảnh"
                      type="text"
                      value={image}
                      onChange={(e)=>setImage(e.target.value)}
                    />
                    {/* <input className="form-control mt-3" type="file" value={image}
                      onChange={(e)=>setImage(e.target.files)} /> */}
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

export default AddProductMain;
