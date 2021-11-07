import { ProductService } from "./../../services/product.service";
import { ProductDetailService } from "./../../services/product-detail.service";
import { Component, OnInit } from "@angular/core";
import { ProductDetail } from "src/app/models/productDetail";
import { Product } from "src/app/models/product";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  productDetails: ProductDetail[] = [];
  currentProductDetail: ProductDetail;
  product: Product[] = [];
  currentProduct: Product;
  productId;
  menuItem=[];
  property:ProductDetail[]=[];
  menu;
  prop;


  constructor(
    private productDetailService: ProductDetailService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.getProductsBySubCategory(params["id"]);
      } else {
        this.getProducts();
      }
    });
  }
  getProducts() {
    this.productService.getProduct().subscribe((response) => {
      this.product = response.data;
    });
  }
  getProductDetails() {
    this.productDetailService.getProductDetail().subscribe((response) => {
      this.productDetails = response.data;
    });
  }

  getProductsBySubCategory(id: number) {
    console.log("getProductsBySubCategory");
    this.productService
      .getProductsBySubCategory(id)
      .subscribe((response) => {
        this.product = response.data;
        this.productId=this.product[0].id;
        console.log(this.product);
        this.getProductDetailsByProduct();
      });
  }
  getProductDetailsByProduct() {
    console.log("getProductDetailsByProduct");
    console.log(this.productId);
    this.productDetailService
      .getProductsDetailByProduct(this.productId)
      .subscribe((response) => {
        this.productDetails = response.data;
        console.log(this.productDetails);
        this.menuItems(this.productDetails[0]);
      });
  }
  setCurrentProduct(product: Product) {
    this.currentProduct = product;
  }
  setCurrentProductDetail(productDetail: ProductDetail) {
    this.currentProductDetail = productDetail;
  }
  menuItems(productDetails){
    this.menu=0;
      if(productDetails.itemNumber!="string"&&productDetails.itemNumber!=null){
        this.menuItem[this.menu]="Item Number";
      
        this.menu++;
      }
      if(productDetails.model!="string"&&productDetails.model!=null){
        this.menuItem[this.menu]="Model";
       
        this.menu++;
      }
      if(productDetails.ean!="string"&&productDetails.ean!=null){
        this.menuItem[this.menu]="EAN";
        
        this.menu++;
      }
      if(productDetails.qD!="string"&&productDetails.qD!=null){
        this.menuItem[this.menu]="øD";
        
        this.menu++;
      }
      if(productDetails.qdmax!="string"&&productDetails.qdmax!=null){
        this.menuItem[this.menu]="Ødmax";
        
        this.menu++;
      }
      if(productDetails.qd1!="string"&&productDetails.qd1!=null){
        this.menuItem[this.menu]="Ød1";
        
        this.menu++;
      }
      if(productDetails.qd2!="string"&&productDetails.qd2!=null){
        this.menuItem[this.menu]="Ød2";
        
        this.menu++;
      }
      if(productDetails.l!="string"&&productDetails.l!=null){
        this.menuItem[this.menu]="L";
        
        this.menu++;
      }
      if(productDetails.l1!="string"&&productDetails.l1!=null){
        this.menuItem[this.menu]="L1";
        
        this.menu++;
      }
      if(productDetails.i1!="string"&&productDetails.i1!=null){
        this.menuItem[this.menu]="l1";
        
        this.menu++;
      }
      if(productDetails.i2!="string"&&productDetails.i2!=null){
        this.menuItem[this.menu]="l2";
        
        this.menu++;
      }
      if(productDetails.v!="string"&&productDetails.v!=null){
        this.menuItem[this.menu]="V";
        
        this.menu++;
      }
      if(productDetails.r!="string"&&productDetails.r!=null){
        this.menuItem[this.menu]="R";
        
        this.menu++;
      }
      if(productDetails.h1!="string"&&productDetails.h1!=null){
        this.menuItem[this.menu]="h1";
        
        this.menu++;
      }
      if(productDetails.b!="string"&&productDetails.b!=null){
        this.menuItem[this.menu]="b";
        
        this.menu++;
      }
      if(productDetails.k!="string"&&productDetails.k!=null){
        this.menuItem[this.menu]="K";
        
        this.menu++;
      }
      if(productDetails.price!="string"&&productDetails.price!=null){
        this.menuItem[this.menu]="Fiyat";
        
        this.menu++;
      }
      

  }
  properties(productDetails){
  //  this.prop=0øD Ødmax
  //   productDetails.forEach(element => {
  //     if(element.itemNumber=="string"&&productDetails.element==null){
  //      this.property.itemNumber=
      
  //       this.menu++;
  //     }
  //     if(element.model!="string"&&element.model!=null){
  //       this.property[this.prop]="Model";
       
  //       this.menu++;
  //     }
  //     if(element.EAN!="string"&&element.EAN!=null){
  //       this.property.="EAN";
        
  //       this.menu++;
  //     }
  //   });
  }
}
