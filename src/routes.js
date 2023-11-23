/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import ChartRealTime from "views/ChartRealTime";
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dữ liệu hiện tại",
    rtlName: "لوحة القيادة",
    icon: "fa-solid fa-clock",
    component: <ChartRealTime />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Reports",
    rtlName: "الرموز",
    icon: "fa-regular fa-newspaper",
    component: <Dashboard />,
    layout: "/admin",
  },
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: <Map />,
  //   layout: "/admin",
  // },
  {
    path: "/notifications",
    name: "Alarm",
    rtlName: "إخطارات",
    icon: "fa-solid fa-bell",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Quản lý nhân sự",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "fa-solid fa-user",
    component: <UserProfile />,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: <TableList />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: <Typography />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: <Rtl />,
  //   layout: "/rtl",
  // },
];
export default routes;
