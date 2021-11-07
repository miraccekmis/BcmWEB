import { SubCategory } from './../../models/subCategory';
import { Routes } from "@angular/router";

import { HomeComponent } from "../../pages/home/home.component";
import { ServicesComponent } from "../../pages/services/services.component";
import { AboutComponent } from "../../pages/about/about.component";
import { ContactComponent } from "../../pages/contact/contact.component"
import { UserComponent } from "../../pages/user/user.component";
import { CategoryComponent } from "../../pages/category/category.component";
import { BrandComponent } from "../../pages/brand/brand.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { SubCategoryComponent } from '../../pages/SubCategory/sub-category.component';
import { ProductComponent } from '../../pages/product/product.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  {path:"",pathMatch:"full", component:HomeComponent},
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "services", component: ServicesComponent },
  { path: "about", component: AboutComponent },
  { path: "brand", component: BrandComponent },
  { path: "contact", component: ContactComponent },
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
