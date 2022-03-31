import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  @Input() item : Produto = {name: "", price: 0, qtde: 0};
  @Output() fecharComponente = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  fechar() : void{
    //Avisa ao pai para fehcar o componente
    this.fecharComponente.emit("Fechei o componente");
  }

}
