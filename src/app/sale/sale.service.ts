import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaleModel } from './sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private apiUrl = "http://localhost:3000/vendas/";

  constructor(private http: HttpClient) { }

  listSales(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  saveSale(sale: SaleModel): Observable<any>{
    return this.http.post(this.apiUrl,sale);
  }

  updateSale(id: any, sale: SaleModel):Observable<any>{
    return this.http.put(this.apiUrl.concat(id),sale);
  }

  removeSale(id:any){
    return this.http.delete(this.apiUrl.concat(id));
  }
}
