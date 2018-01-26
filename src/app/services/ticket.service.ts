import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Ticket} from '../models/ticket';
import {Meeting} from '../models/meeting';
import { Global } from 'app/services/global';

@Injectable()
export class TicketService {
  public url: string;

  constructor(private _http: Http){
    this.url = Global.url;
  }

  getTickets(meetingId = null){
    if(meetingId == null){
      return this._http.get(this.url+'tickets')
        .map(res => res.json());
    }else{
      return this._http.get(this.url+'tickets/'+meetingId)
        .map(res => res.json());
    }
  }

  addTicket(ticket: Ticket){
    let json = JSON.stringify(ticket);
    let params = json;
    let headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(this.url+'ticket', params, {headers: headers})
      .map(res => res.json());
  }
}
