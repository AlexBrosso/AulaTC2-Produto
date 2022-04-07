import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  produtoSelecionado : number = -1;
  
  lista : Produto[] = [];

  constructor(private data : DatabaseService) { }

  ngOnInit(): void {
    this.atualizarProdutos();
    this.produtoSelecionado = -1;
  }

  private atualizarProdutos() : void{
    this.lista = this.data.getProdutos();
  }

  executarFechamento() : void{
    this.produtoSelecionado = -1;
  }

  selecionar(indice : number) : void {
    this.produtoSelecionado = indice;
  }

}
