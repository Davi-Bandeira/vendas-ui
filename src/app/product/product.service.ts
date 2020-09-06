import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:3000/produtos/";

  constructor(private http: HttpClient) { }

  listProducts(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  saveProduct(product: ProductModel): Observable<any>{
    return this.http.post(this.apiUrl,product);
  }

  updateProduct(id: any, product: ProductModel):Observable<any>{
    return this.http.put(this.apiUrl.concat(id),product);
  }

  removeProduct(id:any){
    return this.http.delete(this.apiUrl.concat(id));
  }
}
