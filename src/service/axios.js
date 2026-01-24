// import packages
import axios from 'axios';
import {useNavigate} from "react-router-dom";

// import lib
// import { link } from '../config/index';
// import { getAuthToken } from '../lib/localStorage'

// axios.defaults.baseURL = link.apiService.main;
// axios.defaults.headers.common['Authorization'] = getAuthToken();

export const setAuthorization = (token) => {
    axios.defaults.headers.common['Authorization'] = token;
}

export const removeAuthorization = () => {
    delete axios.defaults.headers.common["Authorization"];
}
export const removeAuthToken = () => {
    localStorage.removeItem('user_token');
    localStorage.removeItem('socket_token');
    localStorage.clear();
    window.location.reload();

}

export const removeToken = () => {
    localStorage.removeItem('user_token');
    localStorage.removeItem('socket_token');
    localStorage.clear();
    window.location.href="/loginPage";

}

export const checkAuth  = () => {
    let getToken = localStorage.getItem("user_token");
    if(getToken != "" && getToken != undefined &&  getToken != null ){
        return true;
    }else{
        return false
    }
}

export const logout  = () => {
   localStorage.clear();

}


export const handleResp = (respData, type = 'success') => {
    try {
        if (type == 'success' && respData && respData.data) {
            return respData.data
        } else if (type == 'error' && respData && respData.response && respData.response.data) {
            return respData.response.data
        } else {
            return {
                'status': 'FAILED',
                'message': 'Something went wrong'
            }
        }
    } catch (err) {
        return {
            'status': 'FAILED',
            'message': 'Something went wrong'
        }
    }
}

export default axios;
