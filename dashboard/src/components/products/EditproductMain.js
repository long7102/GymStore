import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { editProduct, updateProduct } from "../../Redux/Actions/ProductActions";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { PRODUCT_UPDATE_RESET } from "../../Redux/Constants/ProductConstants";
import { toast } from "react-toastify";
import Toast from "../LoadingError/Toast";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 3000,
}
const EditProductMain = (props) => {
  const { productId } = props;

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [brand, setBrand] = useState("")
  const [image, setImage] = useState("")
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState("")
  
  const dispatch = useDispatch()

  const productEdit = useSelector((state) => state.productEdit)
  const {loading, error, product} = productEdit

  const productUpdate = useSelector((state) => state.productUpdate)
  const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = productUpdate

  useEffect(() => {
    if(successUpdate) {
      dispatch({type: PRODUCT_UPDATE_RESET})
      toast.success("Cập nhật thông tin thành công", ToastObjects)
    }
    else{
      if(!product.name || product._id !== productId){
        dispatch(editProduct(productId))
      }
      else {
        setName(product.name)
        setPrice(product.price)
        setBrand(product.brand)
        setDescription(product.description)
        setCountInStock(product.countInStock)
        setImage(product.image)
      }
    }

    
  }, [product,dispatch, productId, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateProduct({
      _id: productId,
        name, 
        price,
        brand,  
        image,  
        countInStock,
        description
    }))
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
                {errorUpdate && <Message variant="alert-danger">{errorUpdate}</Message>}
                  {loadingUpdate && <Loading/>}
                  {
                    loading ? <Loading/> : error ? <Message variant="alert-danger">{errorUpdate}</Message>
                    :(
                      <>
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
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Thương hiệu
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập thương hiệu"
                      className="form-control"
                      id="product_brand"
                      required
                      value={brand}
                      onChange={(e)=>setBrand(e.target.value)}
                      
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
                      value={price}
                      onChange={(e)=>setPrice(e.target.value)}
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
                      type="text"
                      value={image}
                      onChange={(e)=>setImage(e.target.value)}
                    />
                  </div>
                  </>
                    )
                  }

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
