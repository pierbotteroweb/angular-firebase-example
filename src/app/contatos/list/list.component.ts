import { Component, OnInit } from '@angular/core';
import { Contato } from "../shared/contato";
import { ContatoService } from "../shared/contato.service";
import { ContatoDataService } from "../shared/contato-data.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  contatos: any
  

  constructor(
    private contatoService: ContatoService,
    private contatoDataService: ContatoDataService) { }

  ngOnInit() {
    this.contatos = this.contatoService.getAll()
  }

  delete(key: string){
    this.contatoService.delete(key)
  }

  edit(contato: Contato, key: string){
    this.contatoDataService.changeContato(contato, key)

  }

}

// inicial em 16:20
// edit em 18:38
//delete em 21:23