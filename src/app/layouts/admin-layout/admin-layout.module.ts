
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { HomeComponent } from "../../pages/home/home.component";
import { ServicesComponent } from "../../pages/services/services.component";
import { AboutComponent } from "../../pages/about/about.component";
import { ContactComponent } from "../../pages/contact/contact.component";
import { UserComponent } from "../../pages/user/user.component";
import { CategoryComponent } from "../../pages/category/category.component";
import { BrandComponent } from "../../pages/brand/brand.component";
import { SubCategoryComponent } from "../../pages/subCategory/sub-category.component";
import { ProductComponent } from './../../pages/product/product.component';
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    ServicesComponent,
    TypographyComponent,
    ContactComponent,
    CategoryComponent,
    BrandComponent,
    AboutComponent,
    SubCategoryComponent,
    ProductComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
