import { Component, OnInit } from '@angular/core';
import { SaleModel } from './sale.model';
import { SaleService } from './sale.service';
import { ClientService } from './../client/client.service';
import { ProductService } from './../product/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  sale: SaleModel = new SaleModel();
  sales: Array<any> = new Array();

  dadosClients: Array<any> = new Array();
  dadosProducts: Array<any> = new Array();

  constructor(
    private saleService: SaleService,
    private clientService: ClientService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.listSales();

    this.clientService.listClients().subscribe(clients => {
      this.dadosClients = clients;
    })

    this.productService.listProducts().subscribe(products => {
      this.dadosProducts = products;
    })
  }

  listSales(){
    this.saleService.listSales().subscribe(sales => {
      this.sales = sales;
    },err =>{
      alert('Erro ao listar as vendas.');
    })

  }

  save(){
    if(this.sale.client == null || this.sale.product == null){
      alert("Digite os campos cliente e produto.");
    }else{

      if(this.sale.id){

        var result = this.validation(this.sale.client, this.sale.product);

        if(result === 1){
          this.saleService.updateSale(this.sale.id, this.sale).subscribe(sale =>{
            this.sale = new SaleModel();
            this.listSales();
          }, err => {
            alert("Erro ao atualizar a venda.");
         })
        }

      }else{

        var result = this.validation(this.sale.client, this.sale.product);

        if(result === 1){
            this.saleService.saveSale(this.sale).subscribe(sale =>{
            this.sale = new SaleModel();
            this.listSales();
          }, err => {
            alert("Erro ao salvar a venda.");
          })
        }
      }
    }
  }

  update(id: number){
    this.saleService.searchSale(id).subscribe(sale =>{
      this.sale = sale;
    })
  }

  remove(id: number){
    this.saleService.removeSale(id).subscribe(sale =>{
      this.sale = new SaleModel();
      this.listSales();
    }, err => {
      alert("Erro ao remover a venda.");
    })
  }

  validation(termClient: String, termProduct:String){
    var obj = [];
    var imputClient = 1;
    var imputProduct = 1;

    obj = this.dadosClients.find(item => item.name.match(termClient));

    if(obj != null){
      var client = Object.values(obj);
      this.sale.client = client[1];
      this.sale.email = client[2];

    }else{
      alert("Erro! O cliente informado não esta cadastrado!");
      imputClient = 0;
    }

    obj = this.dadosProducts.find(item => item.name.match(termProduct));

    if(obj != null){
      var product = Object.values(obj);
      this.sale.product = product[1];
      this.sale.price = product[2];

    }else{
      alert("Erro! O produto informado não esta cadastrado!");
      imputProduct = 0;
    }
    if(imputClient === 1 && imputProduct === 1){
      return 1;
    }else{
      return 0;
    }
  }
}

