import { Injectable } from '@angular/core';
import { Product } from '../app/model/product'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl='https://my-json-server.typicode.com/HasanLisbon/json/products';

  constructor(private http:HttpClient) { }
  
  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.productsUrl}`);
  }
}
