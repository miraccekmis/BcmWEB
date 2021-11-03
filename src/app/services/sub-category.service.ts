import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SubCategory } from '../models/subCategory';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  apiUrl = 'https://localhost:44357/api/';

  constructor(private httpClient: HttpClient) { }

  getSubCategories():Observable<ListResponseModel<SubCategory>> {
    let newPath =this.apiUrl+"SubCategory/getall"
    return this.httpClient.get<ListResponseModel<SubCategory>>(newPath);
  }
  getSubCategoriesByCategory(id:number):Observable<ListResponseModel<SubCategory>> {
    let newPath = this.apiUrl + "SubCategory/getlistbycategory?categoryId="+id
    return this.httpClient.get<ListResponseModel<SubCategory>>(newPath);
  }
  categoryAdd(subCategory:SubCategory):Observable<ResponseModel> {
    let newPath = this.apiUrl + "SubCategory/add"
    return this.httpClient.post<ResponseModel>(newPath,subCategory);
  }
  categoryUpdate(subCategory:SubCategory):Observable<ResponseModel> {
    let newPath = this.apiUrl + "SubCategory/update"
    return this.httpClient.post<ResponseModel>(newPath,subCategory);
  }
  categoryDelete(id:number):Observable<ResponseModel> {
    let newPath = this.apiUrl + "SubCategory/delete?categoryId="+id
    return this.httpClient.post<ResponseModel>(newPath,id);
  }
}
