import { Category } from './../models/category';
import { ResponseModel } from './../models/responseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44357/api/';

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>> {
    let newPath =this.apiUrl+"Category/getall"
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
  getCategoriesByBrand(id:number):Observable<ListResponseModel<Category>> {
    let newPath = this.apiUrl + "Category/getlistbybrand?brandId="+id
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
  categoryAdd(category:Category):Observable<ResponseModel> {
    let newPath = this.apiUrl + "Category/add"
    return this.httpClient.post<ResponseModel>(newPath,category);
  }
  categoryUpdate(category:Category):Observable<ResponseModel> {
    let newPath = this.apiUrl + "Category/update"
    return this.httpClient.post<ResponseModel>(newPath,category);
  }
  categoryDelete(id:number):Observable<ResponseModel> {
    let newPath = this.apiUrl + "Category/delete?categoryId="+id
    return this.httpClient.post<ResponseModel>(newPath,id);
  }
}
