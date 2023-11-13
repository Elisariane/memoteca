import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular222',
    autoria: 'Dev Lisa',
    modelo: 'modelo2'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
