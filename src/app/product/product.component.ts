import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductModel = new ProductModel();
  products: Array<any> = new Array();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
      this.listProducts();
  }

  listProducts(){
    this.productService.listProducts().subscribe(products => {
      this.products = products;
    },err =>{
      alert('Erro ao listar os produtos.');
    })
  }

  save(){
    if(this.product.name == null || this.product.price == null){
      alert("Digite os campos nome e preço.");
    }else{

      if(this.product.id){
        this.productService.updateProduct(this.product.id, this.product).subscribe(product =>{
          this.product = new ProductModel();
          this.listProducts();
        }, err => {
          alert("Erro ao atualizar o produto.");
        })
      }else{
        this.productService.saveProduct(this.product).subscribe(product =>{
          this.product = new ProductModel();
          this.listProducts();
        }, err => {
          alert("Erro ao salvar o produto.");
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
      this.listProducts();
    }, err => {
      alert("Erro ao remover o produto.");
    })
  }

}
