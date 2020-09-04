import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientModel } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  listClients(): Observable<any>{
    return this.http.get("http://localhost:3000/clientes/");
  }

  saveClient(client: ClientModel): Observable<any>{
    return this.http.post("http://localhost:3000/clientes/",client);
  }

  updateClient(id: any, client: ClientModel):Observable<any>{
    return this.http.put("http://localhost:3000/clientes/".concat(id),client);
  }

  removeClient(id:any){
    return this.http.delete("http://localhost:3000/clientes/".concat(id));
  }
}
