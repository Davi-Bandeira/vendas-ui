import { Component, OnInit } from '@angular/core';
import { SaleModel } from './sale.model';
import { SaleService } from './sale.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  sale: SaleModel = new SaleModel();
  sales: Array<any> = new Array();

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
      this.listSales();
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
      this.saleService.saveSale(this.sale).subscribe(sale =>{
        this.sale = new SaleModel();
        this.listSales();
      }, err => {
        alert("Erro ao salvar a venda.");
      })
    }
  }

  update(id: number){
    if(this.sale.client == null || this.sale.product == null){
      alert("Digite os campos cliente e produto.");
    }else{
      this.saleService.updateSale(id, this.sale).subscribe(sale =>{
        this.sale = new SaleModel();
        this.listSales();
      }, err => {
        alert("Erro ao atualizar a venda.");
      })
    }
  }

  remove(id: number){
    this.saleService.removeSale(id).subscribe(sale =>{
      this.sale = new SaleModel();
      this.listSales();
    }, err => {
      alert("Erro ao remover a venda.");
    })
  }

}
