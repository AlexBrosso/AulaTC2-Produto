import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  @Input() item : number = -1;
  produto : Produto = {name: "", price: 0, qtde: 0};
  @Output() fecharComponente = new EventEmitter<String>();

  constructor(private data : DatabaseService) { }

  ngOnInit(): void {
    this.produto  = this.data.getProduto(this.item);
  }

  ngOnChanges(changes : SimpleChange) : void {
    this.produto = this.data.getProduto(this.item);
  }

  fechar() : void{
    //Avisa ao pai para fehcar o componente
    this.fecharComponente.emit("Fechei o componente");
  }

}
