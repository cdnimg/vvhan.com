/*
 * @Author: Han
 * @Date: 2022-05-12 18:57:54
 * @LastEditors: Han
 * @LastEditTime: 2022-05-17 14:09:10
 * @FilePath: \newAdmin\src\plugins\axios\axios.js
 */
import axios from "axios";
import { Notification } from "element-ui";

// 设置基准 URL
axios.defaults.baseURL = "/";

// 设置请求头
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

// 设置超时时间
axios.defaults.timeout = 10000;

// 错判拦截
axios.interceptors.response.use(
  // 状态码 200 时抛出数据
  // ({data}) => data

  // success 专属封装
  ({ data }) => {
    if (data.login === false) {
      Notification({ title: "Error", message: "登陆失效，请重新登陆", type: "error", offset: 66, duration: 888 });
    }

    data.message && Notification({ title: data.success ? "Success" : "Error", message: data.message, type: data.success ? "success" : "error", offset: 66, duration: 888 });
    return data;
  }
);

export default axios;
