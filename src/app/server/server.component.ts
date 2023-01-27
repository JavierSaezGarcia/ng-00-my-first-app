// Importamos el decorador @Component que mejora la clase 
import { TypeofExpr } from '@angular/compiler';
import { Component, Input } from '@angular/core';
// Decorador @Component que mejora la clase ServerComponent 
@Component({
  selector: 'app-server',  
  templateUrl: './server.component.html', 
  styles: [`
       .online{
        color: white;
       }
  `]
})
export class ServerComponent {
  @Input() servers: string[]
  // Propiedades de la clase
  serverId: number = 10;
  serverStatus: string = 'offline';
  server: string = "Servidor Europa";
  counter=0;

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }



  getServer() {
    this.counter++;
    return this.server;
  }
  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? '#2ecc71': '#e74c3c'
  }
}
