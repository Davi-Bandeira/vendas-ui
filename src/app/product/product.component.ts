import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ProductModel } from './product.model';
import { AlertModalService } from '../shared/alert-modal/alert-modal.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductModel = new ProductModel();
  products: Array<any> = new Array();

  constructor(private productService: ProductService,
    private alertService: AlertModalService) { }

  ngOnInit(): void {
      this.listProducts();
  }

  listProducts(){
    this.productService.listProducts().subscribe(products => {
      this.products = products;
    },err =>{

      this.alertService.showAlertDanger('Erro ao listar os produtos.');
    })
  }

  save(){
    if(this.product.name == null || this.product.price == null){

      this.alertService.showAlertWarning('Digite os campos nome e preço.');
    }else{

      if(this.product.id){
        this.productService.updateProduct(this.product.id, this.product).subscribe(product =>{
          this.product = new ProductModel();

          this.alertService.showAlertSucess('Produto atualizado com sucesso.');
          this.listProducts();
        }, err => {

          this.alertService.showAlertDanger('Erro ao atualizar o produto. Verifique se digitou um numero em preço.');
        })
      }else{
        this.productService.saveProduct(this.product).subscribe(product =>{
          this.product = new ProductModel();

          this.alertService.showAlertSucess('Produto cadastrado com sucesso.');
          this.listProducts();
        }, err => {

          this.alertService.showAlertDanger('Erro ao cadastrar o produto. Verifique se digitou um numero em preço.');
        })
      }
    }
  }

  update(id: number){
    this.productService.searchProduct(id).subscribe(product =>{
       this.product = product;
     })
   }

  remove(id: number){
    this.productService.removeProduct(id).subscribe(product =>{
      this.product = new ProductModel();

      this.alertService.showAlertSucess('Produto removido com sucesso.');
      this.listProducts();
    }, err => {

      this.alertService.showAlertDanger('Erro ao remover o produto.');
    })
  }

}
