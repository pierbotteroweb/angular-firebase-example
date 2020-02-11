import { Injectable } from '@angular/core';
import { Contato } from './contato';
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from 'rxjs/operators';
import { FinalService } from "./final.service";

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  
  items: any;

  constructor(private db: AngularFireDatabase,
    private myFinal: FinalService) { }

  insert(contato: Contato){
    this.db.list('contato').push(contato)
    .then((result:any)=>{
      console.log(result.key)
    })
  }

  update(contato: Contato, key: string){
    this.db.list('contato').update(key, contato)
    .catch((erro)=>{
      console.error(erro)
    })
  }

  getAll(){
    this.db.list('contato')
    .valueChanges()
    .subscribe(val => {
      this.items = val;
      // console.log("Valores",val);
      this.myFinal.alteraInfo(this.items)
    });


    // .snapshotChanges()
    // .pipe(
    //   map(changes =>{
    //     return changes.map(c => ({
    //       // key: c.payload.key, ...c.payload.exportVal()
    //       key: c.payload.key, ...c.payload.val()
    //     }))
    //   })
    // )
  

  }

  delete(key: string){
    this.db.object(`contato/${key}`).remove()

  }


}


//Tempo 6:59 do video

//Tempo 7:48 para imports, constructor e metodo Insert
//Tempo 8:17 para metodo update
//Tempo 8:17 para metodo getAll
//Tempo 9:04 para metodo delete