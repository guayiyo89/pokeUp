import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/modal.service';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(public connectionSvc: ConnectionService) { }

  noConnection$ = this.connectionSvc.offline$;

  ngOnInit(): void {
  }

  close() {
    this.connectionSvc.hideConnectionError();
  }
  

}
