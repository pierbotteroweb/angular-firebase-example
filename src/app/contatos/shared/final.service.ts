import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinalService {

  
  static infoTransmitida = new EventEmitter<any>()

  constructor() { }

  
  alteraInfo(info:any){
    FinalService.infoTransmitida.emit(info)
  }
}
