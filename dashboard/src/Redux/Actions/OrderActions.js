import { ORDER_DELIVERED_FAIL, ORDER_DELIVERED_REQUEST, ORDER_DELIVERED_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS } from "../Constants/OrderConstants"
import axios from "axios"
import { logout } from "./UserActions"

//tất cả đơn hàng
export const listOrders = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_LIST_REQUEST})
        
        const {
        userLogin: {userInfo}, 
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/orders/all`, config)
        dispatch({ type: ORDER_LIST_SUCCESS, payload: data })
    } catch (error) {
        const message = error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === "Không uỷ quyền được, lấy token thất bại") {
            dispatch(logout())
        }
        dispatch({
            type: ORDER_LIST_FAIL,
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


//chi tiet vận chuyển
export const deliverOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_DELIVERED_REQUEST })
        const{ userLogin: {userInfo}, } = getState()
        
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.put(`/api/orders/${order._id}/delivered`, {}, config)
        dispatch({ type: ORDER_DELIVERED_SUCCESS, payload: data })
    } catch (error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        if(message === "Không uỷ quyền được, lấy token thất bại"){
            dispatch(logout())
        } 
        dispatch({
            type: ORDER_DELIVERED_FAIL,
            payload: message,
        })
    }
}