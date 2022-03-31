import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  @Input() item : Produto = {name: "", price: 0, qtde: 0};

  constructor() { }

  ngOnInit(): void {
  }

}
