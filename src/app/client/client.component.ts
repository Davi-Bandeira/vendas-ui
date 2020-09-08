import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { ClientModel } from './client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client: ClientModel = new ClientModel();
  clients: Array<any> = new Array();

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
      this.listClients();
  }

  listClients(){
    this.clientService.listClients().subscribe(clients => {
      this.clients = clients;
    },err =>{
      alert('Erro ao listar os clientes');
    })
  }

  save(){
    if(this.client.name == null || this.client.email == null){
      alert("Digite os campos nome e email");
    }else{

      if(this.client.id){
        this.clientService.updateClient(this.client.id, this.client).subscribe(client =>{
          this.client = new ClientModel();
          this.listClients();
        }, err => {
          alert("Erro ao atualizar o cliente");
        })
      }else{
        this.clientService.saveClient(this.client).subscribe(client =>{
          this.client = new ClientModel();
          this.listClients();
        }, err => {
          alert("Erro ao salvar o cliente");
        })
      }
    }
  }

  remove(id: number){
    this.clientService.removeClient(id).subscribe(client =>{
      this.client = new ClientModel();
      this.listClients();
    }, err => {
      alert("Erro ao remover o cliente");
      console.log(err);
    })
  }

  update(id: number){
   this.clientService.searchClient(id).subscribe(client =>{
      this.client = client;
    })
  }

}
