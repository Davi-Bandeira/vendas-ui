import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaleModel } from './sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  listSales(): Observable<any>{
    return this.http.get("http://localhost:3000/vendas/");
  }

  saveSale(sale: SaleModel): Observable<any>{
    return this.http.post("http://localhost:3000/vendas/",sale);
  }

  updateSale(id: any, sale: SaleModel):Observable<any>{
    return this.http.put("http://localhost:3000/vendas/".concat(id),sale);
  }

  removeSale(id:any){
    return this.http.delete("http://localhost:3000/vendas/".concat(id));
  }
}
