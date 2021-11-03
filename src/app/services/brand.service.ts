import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44357/api/"

  constructor(private httpClient: HttpClient) { }
  getBrands():Observable<ListResponseModel<Brand>>
  {
    let newPath =this.apiUrl+"Brand/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);

  }
  brandAdd(brand:Brand):Observable<ResponseModel> {
    let newPath = this.apiUrl + "Brand/add"
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
  brandUpdate(brand:Brand):Observable<ResponseModel> {
    let newPath = this.apiUrl + "Brand/update"
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
  brandDelete(id:number):Observable<ResponseModel> {
    let newPath = this.apiUrl + "Brand/delete?brandId="+id
    return this.httpClient.post<ResponseModel>(newPath,id);
  }
}
