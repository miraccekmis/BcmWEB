import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44357/api/';

  constructor(private httpClient: HttpClient) { }

  getProduct():Observable<ListResponseModel<Product>> {
    let newPath =this.apiUrl+"Product/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsBySubCategory(id:number):Observable<ListResponseModel<Product>> {
    console.log("getProductsBySubCategory service");
    let newPath = this.apiUrl + "Product/getlistbysubcategory?subCategoryId="+id
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  productAdd(product:Product):Observable<ResponseModel> {
    let newPath = this.apiUrl + "Product/add"
    return this.httpClient.post<ResponseModel>(newPath,product);
  }
  productUpdate(product:Product):Observable<ResponseModel> {
    let newPath = this.apiUrl + "Product/update"
    return this.httpClient.post<ResponseModel>(newPath,product);
  }
  productDelete(id:number):Observable<ResponseModel> {
    let newPath = this.apiUrl + "Product/delete?productId="+id
    return this.httpClient.post<ResponseModel>(newPath,id);
  }
}
