import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos  = [
    {
      id: '1',
      conteudo: 'Aprendendo Angular a',
      autoria: 'Dev Lisa',
      modelo: 'modelo3'
    },
    {
      id: '1',
      conteudo: 'Aprendendo Angular asasa',
      autoria: 'Dev Lisa',
      modelo: 'modelo3'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
