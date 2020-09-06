import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientModel } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl="http://localhost:3000/clientes/";

  constructor(private http: HttpClient) { }

  listClients(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  saveClient(client: ClientModel): Observable<any>{
    return this.http.post(this.apiUrl,client);
  }

  updateClient(id: any, client: ClientModel):Observable<any>{
    return this.http.put(this.apiUrl.concat(id),client);
  }

  removeClient(id:any){
    return this.http.delete(this.apiUrl.concat(id));
  }
}
