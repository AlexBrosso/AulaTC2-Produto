import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  produtoSelecionado : Produto  = {name: "", price: 0, qtde: 0}
  
  lista : Produto[] = [
    {name: "Toddynho", price: 9.99, qtde: 2000},
    {name: "Ovo", price: 8.99, qtde: 255},
    {name: "Leite", price: 3.99, qtde: 2550},
    {name: "Máscara", price: 6.99, qtde: 2550},
    {name: "Polenta frita", price: 16.99, qtde: 400},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selecionar(produto : Produto) : void {
    this.produtoSelecionado = produto;
  }

}
