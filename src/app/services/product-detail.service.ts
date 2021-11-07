import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductDetail } from '../models/productDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  apiUrl = 'https://localhost:44357/api/';

  constructor(private httpClient: HttpClient) { }

  getProductDetail():Observable<ListResponseModel<ProductDetail>> {
    let newPath =this.apiUrl+"ProductDetail/getall"
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
  }
  getProductsDetailByProduct(id:number):Observable<ListResponseModel<ProductDetail>> {
    let newPath = this.apiUrl + "ProductDetail/getlistbyproduct?productId="+id
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
  }
  productDetailAdd(productDetail:ProductDetail):Observable<ResponseModel> {
    let newPath = this.apiUrl + "ProductDetail/add"
    return this.httpClient.post<ResponseModel>(newPath,productDetail);
  }
  productDetailUpdate(productDetail:ProductDetail):Observable<ResponseModel> {
    let newPath = this.apiUrl + "productDetail/update"
    return this.httpClient.post<ResponseModel>(newPath,productDetail);
  }
  productDetailDelete(id:number):Observable<ResponseModel> {
    let newPath = this.apiUrl + "productDetail/delete?productDetailId="+id
    return this.httpClient.post<ResponseModel>(newPath,id);
  }
}
