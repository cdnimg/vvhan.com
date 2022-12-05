/*
 * @Author: Han
 * @Date: 2022-05-12 18:58:50
 * @LastEditors: Han
 * @LastEditTime: 2022-05-17 13:19:37
 * @FilePath: \newAdmin\src\plugins\http.js
 */
import axios from "./axios/axios";
import QS from "qs";

const token = 'x';
// 封装Get请求 Post请求
const POST = (url, params) => axios.post(url, QS.stringify({ ...params, token }));
const GET = (url, params) => axios.get(url, { params: { ...params, token } });

// 请求体
export const getList = (params) => POST("getAllData.php", params);
export const getJson = (params) => GET("getAllData.php", params);
// 获取二维码
export const getLogin = (params) => POST("vLogin/loginHeart.php", params);
