import { CART_CLEAR_ITEMS } from "../Constants/CartConstants"
import axios from 'axios'
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_MY_LIST_FAIL, ORDER_MY_LIST_REQUEST, ORDER_MY_LIST_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS } from "../Constants/OrderConstants"
import { logout } from "./UserActions"


//tao don hang
export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_CREATE_REQUEST })
        const{ userLogin: {userInfo}, } = getState()
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.post(`/api/orders/`, order, config)
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data })
        dispatch({ type: CART_CLEAR_ITEMS, payload: data })
        localStorage.removeItem("cartItems")
    } catch (error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        if(message === "Không uỷ quyền được, lấy token thất bại"){
            dispatch(logout())
        } 
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: message,
        })
    }
}

//chi tiet don hang
export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST })
        const{ userLogin: {userInfo}, } = getState()
        
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.get(`/api/orders/${id}`, config)
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        if(message === "Không uỷ quyền được, lấy token thất bại"){
            dispatch(logout())
        } 
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: message,
        })
    }
}

//thanh toan don hang
export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_PAY_REQUEST })
        const{ userLogin: {userInfo}, } = getState()
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config)
        dispatch({ type: ORDER_PAY_SUCCESS, payload: data })
    } catch (error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        if(message === "Không uỷ quyền được, lấy token thất bại"){
            dispatch(logout())
        } 
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: message,
        })
    }
}

//danh sach don hang
export const listMyOrders = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_MY_LIST_REQUEST })
        const{ userLogin: {userInfo}, } = getState()
        
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.get(`/api/orders/`, config)
        dispatch({ type: ORDER_MY_LIST_SUCCESS, payload: data })
    } catch (error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        if(message === "Không uỷ quyền được, lấy token thất bại"){
            dispatch(logout())
        } 
        dispatch({
            type: ORDER_MY_LIST_FAIL,
            payload: message,
        })
    }
}