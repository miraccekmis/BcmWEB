import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/",
    title: "Anasayfa",
    rtlTitle: "لوحة القيادة",
    icon: "icon-bank",
    class: "",
  },
  {
    path: "/about",
    title: "Hakkımızda",
    rtlTitle: "خرائط",
    icon: "icon-book-bookmark",
    class: "",
  },
  {
    path: "/brand",
    title: "Ürünler",
    rtlTitle: "الرموز",
    icon: "icon-app",
    class: "",
  },
  {
    path: "/services",
    title: "Hizmetler",
    rtlTitle: "الرموز",
    icon: "icon-tap-02",
    class: "",
  },

  {
    path: "/contact",
    title: "İletişim",
    rtlTitle: "إخطارات",
    icon: "icon-square-pin",
    class: "",
  },

  // {
  //   path: "/user",
  //   title: "User Profile",
  //   rtlTitle: "ملف تعريفي للمستخدم",
  //   icon: "icon-single-02",
  //   class: ""
  // },
  // {
  //   path: "/tables",
  //   title: "Table List",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-puzzle-10",
  //   class: ""
  // },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
