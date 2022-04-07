import { Injectable } from '@angular/core';
import { Produto } from './model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private listaProdutos : Produto[] = [
    {name: "Toddynho", price: 9.99, qtde: 2000},
    {name: "Ovo", price: 8.99, qtde: 255},
    {name: "Leite", price: 3.99, qtde: 2550},
    {name: "Máscara", price: 6.99, qtde: 2550},
    {name: "Polenta frita", price: 16.99, qtde: 400},
  ];

  constructor() { }

  getProdutos(){
    return this.listaProdutos;
  }

  getProduto(indice : number){
    return this.listaProdutos[indice];
  }

  private isUnico(produto : Produto) : boolean{

    for(let prod of this.listaProdutos){
      if(prod.name == produto.name){
        return false;
      }
    }

    return true;

  }

  addProduto(produto : Produto) : boolean{
    if(this.isUnico(produto)){
      this.listaProdutos.push(produto);
      return true;
    }
    return false;
  }
}
