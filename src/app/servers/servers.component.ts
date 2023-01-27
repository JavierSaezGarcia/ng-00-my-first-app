import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  // propiedades de la clase
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  serverCreated: boolean = false;
  servers: string[] = [];
  

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;

    }, 5000);
  }
  ngOnInit(): void {

  }
  onCreateServer() {
    
    this.serverCreationStatus = "Creating server...";

    setTimeout(() => {
      this.serverCreationStatus = "Server was created! Name is " + this.serverName;
      this.serverCreated = true;
      this.servers.push( this.serverName );
      
      
    }, 100);


  }

  onUpdateServerName(event: Event) {
    // console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}


