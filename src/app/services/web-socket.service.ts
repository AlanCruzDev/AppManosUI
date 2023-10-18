import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  constructor(public socket:Socket) { }

  public enviarFoto(foto:string){
    let user ={
      name:foto,
      id:'1'
    }
    this.socket.emit('sign_in',user);
  }

  public getLetraDeciscion(){
    return this.socket.fromEvent('letra').pipe(map((data:any)=>data));
  }
}
