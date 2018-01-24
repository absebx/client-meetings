import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {MeetingService} from '../../../services/meeting.service';
import {Meeting} from '../../../models/meeting';

@Component({
  selector: 'app-meeting-new',
  templateUrl: './meeting-new.component.html',
  styleUrls: ['./meeting-new.component.css']
})
export class MeetingNewComponent implements OnInit {
  public errorMessage: any;
  public meeting: Meeting;
  public bloqueo: boolean;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _meetingService: MeetingService
  ){
    this.bloqueo = false;
  }

  ngOnInit() {
    console.log("meting-new.component.ts working");
    this.meeting = new Meeting("","");
  }

}
