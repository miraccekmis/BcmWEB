import { SubCategory } from './../../models/subCategory';
import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { CategoryComponent } from "../../pages/category/category.component";
import { BrandComponent } from "../../pages/brand/brand.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { SubCategoryComponent } from '../../pages/SubCategory/sub-category.component';
import { ProductComponent } from '../../pages/product/product.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "", component: DashboardComponent },
  { path: "maps", component: MapComponent },
  { path: "brand", component: BrandComponent },
  { path: "notifications", component: IconsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "category", component: CategoryComponent },
  { path: "category/:id", component: CategoryComponent },
  { path: "subCategory", component: SubCategoryComponent },
  { path: "subCategory/:id", component: SubCategoryComponent },
  { path: "product", component: ProductComponent },
  { path: "product/:id", component: ProductComponent }
  // { path: "rtl", component: RtlComponent }
];
