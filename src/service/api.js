// import axios from './axios';
// import { respChanges } from './responseModify';
// import { env } from './envConfig';
// const backendHost = env.apiHost

// export const getMethod = async (data) => {
//     try {

//         let respData = await axios({
//             'method': 'get',
//             'url': backendHost + data.apiUrl,
//             headers: {
//                 "content-type": "application/json",
//                 authorization: localStorage.getItem("user_token")
//             },
//         });
//         return respChanges(respData.data);
//     }
//     catch (err) {
//         return {
//             status: 'error',
//             message: err.response.data.message,
//             error: err.response.data.errors
//         }
//     }
// }

// export const postMethod = async (data) => {
//     try {
//         var headers = {
//             "content-type": "application/json",
//             authorization: localStorage.getItem("user_token")
//         }

//         let respData = await axios({
//             'method': 'post',
//             'url': backendHost + data.apiUrl,
//             data: data.payload ? data.payload : {},
//             headers: headers

//         });

//         return respChanges(respData.data);
//     }
//     catch (err) {
//         return {
//             status: 'error',
//             message: err.response.data.message,
//             error: err.response.data.errors
//         }
//     }
// }

// export const fileUpload = async (data) => {
//     try {
//         const config = {
//             headers: {
//                 "content-type": "multipart/form-data",
//             },
//         };
//         let respData = await axios({
//             'method': 'post',
//             'url': data.apiUrl,
//             data: data.payload ? data.payload : {},
//             headers: config
//         });
//         return respChanges(respData.data);
//     }
//     catch (err) {
//         return {
//             status: 'error',
//             message: err.response.data.message,
//             error: err.response.data.errors
//         }
//     }
// }




import axios from "axios";

export const getMethod = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error("GET API error:", error);
    return null;
  }
};

export const postMethod = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    console.error("POST API error:", error);
    return null;
  }
};
