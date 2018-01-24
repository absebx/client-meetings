import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Meeting} from '../models/meeting';
import { Global } from 'app/services/global';

@Injectable()
export class MeetingService {
  public url: string;

  constructor(private _http: Http) {
    this.url = Global.url
  }

  getMeetings(){
    return this._http.get(this.url+'meetings')
      .map(res => res.json());
  }

}
