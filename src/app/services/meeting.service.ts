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

  getMeeting(id: string){
    return this._http.get(this.url+'meeting/'+id)
      .map(res => res.json());
  }

  addMeeting(meeting: Meeting){
    let json = JSON.stringify(meeting);
    let params = json;
    let headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(this.url+'meeting', params, {headers: headers})
      .map(res => res.json());
  }

}
