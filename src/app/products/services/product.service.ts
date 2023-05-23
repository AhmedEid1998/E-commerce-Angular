import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _HttpClient: HttpClient) {}

  baseUrl:string = 'https://fakestoreapi.com'

  getAllProducts():Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/products`);
  }

  getCategorys():Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/products/categories`);
  }

  getProductsByCategories(keyword:string):Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/products/category/` + keyword);
  }


  getProductById(id:number):Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/products/` + id);
  }


}
