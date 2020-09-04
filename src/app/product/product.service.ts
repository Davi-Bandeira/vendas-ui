import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  listProducts(): Observable<any>{
    return this.http.get("http://localhost:3000/produtos/");
  }

  saveProduct(product: ProductModel): Observable<any>{
    return this.http.post("http://localhost:3000/produtos/",product);
  }

  updateProduct(id: any, product: ProductModel):Observable<any>{
    return this.http.put("http://localhost:3000/produtos/".concat(id),product);
  }

  removeProduct(id:any){
    return this.http.delete("http://localhost:3000/produtos/".concat(id));
  }
}
