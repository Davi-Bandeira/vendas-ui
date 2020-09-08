import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { ClientModel } from './client.model';
import { AlertModalService } from '../shared/alert-modal/alert-modal.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client: ClientModel = new ClientModel();
  clients: Array<any> = new Array();

  constructor(private clientService: ClientService,
    private alertService: AlertModalService) { }

  ngOnInit(): void {
      this.listClients();
  }

  listClients(){
    this.clientService.listClients().subscribe(clients => {
      this.clients = clients;
    },err =>{
      this.alertService.showAlertDanger('Erro ao listar os clientes.');
    })
  }

  save(){
    if(this.client.name == null || this.client.email == null){

      this.alertService.showAlertWarning('Digite os campos nome e email.');
    }else{

      if(this.client.id){
        this.clientService.updateClient(this.client.id, this.client).subscribe(client =>{
          this.client = new ClientModel();

          this.alertService.showAlertSucess('Cliente atualizado com sucesso.');

          this.listClients();
        }, err => {

          this.alertService.showAlertDanger('Erro ao atualizar o cliente.');
        })
      }else{
        this.clientService.saveClient(this.client).subscribe(client =>{
          this.client = new ClientModel();

          this.alertService.showAlertSucess('Cliente cadastrado com sucesso.');
          this.listClients();
        }, err => {

          this.alertService.showAlertDanger('Erro ao cadastrar o cliente');
        })
      }
    }
  }

  remove(id: number){
    this.clientService.removeClient(id).subscribe(client =>{
      this.client = new ClientModel();

      this.alertService.showAlertSucess('Cliente removido com sucesso.');
      this.listClients();
    }, err => {
      this.alertService.showAlertDanger('Erro ao remover o cliente');
    })
  }

  update(id: number){
   this.clientService.searchClient(id).subscribe(client =>{
      this.client = client;
    })
  }

}
