import { USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_RESET, USER_LIST_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../Constants/UserConstants"
import axios from "axios"
import { toast } from "react-toastify"
//đăng nhập
export const login = (email, password) => async (dispatch) => {
    const ToastObjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 3000,
    }
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post(`/api/users/login`, { email, password }, config)
        if (!data.isAdmin === true) {
            toast.error("Bạn không phải admin, đăng nhập thất bại", ToastObjects)
            dispatch({
                type: USER_LOGIN_FAIL
            })
        }
        else {
            alert("Chào admin, đăng nhập thành công")
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        }

        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        const message = error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === "Không uỷ quyền được, lấy token thất bại") {
            dispatch(logout())
        }
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: message,
        })
    }
}
//đăng xuất
export const logout = () => (dispatch) => {
    // Xóa thông tin người dùng khỏi localStorage.
    localStorage.removeItem("userInfo");
    // Thực hiện hành động đăng xuất người dùng.
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_LIST_RESET });
    // Chuyển hướng người dùng đến trang chủ.
    // document.location.href = "/";
}

//tất cả người dùng
export const listUser = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_LIST_REQUEST })
        
        const {
        userLogin: {userInfo}, 
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/users`, config)
        dispatch({ type: USER_LIST_SUCCESS, payload: data })
    } catch (error) {
        const message = error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === "Không uỷ quyền được, lấy token thất bại") {
            dispatch(logout())
        }
        dispatch({
            type: USER_LIST_FAIL,
            payload: message,
        })
    }
}