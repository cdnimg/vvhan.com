/*
 * @Author: Han
 * @Date: 2022-05-11 14:15:57
 * @LastEditors: Han
 * @LastEditTime: 2022-05-17 16:03:25
 * @FilePath: \newAdmin\src\plugins\element-ui.js
 */
import Vue from "vue";
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, RadioButton, RadioGroup, Breadcrumb, BreadcrumbItem, Table, TableColumn, Drawer, Notification, Form, FormItem, Input, Icon, Popconfirm } from "element-ui";

const elementArr = { Button, Menu, Submenu, MenuItem, MenuItemGroup, RadioButton, RadioGroup, Breadcrumb, BreadcrumbItem, Table, TableColumn, Drawer, Form, FormItem, Input, Icon, Popconfirm };

Object.values(elementArr).forEach((itm) => {
  Vue.use(itm);
});

Vue.prototype.$notify = Notification;
