import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { MeetingService} from '../../../services/meeting.service';
import {Meeting} from '../../../models/meeting';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css'],
  providers: [MeetingService]
})
export class MeetingListComponent implements OnInit {
  public loading: boolean;
  public meetings: Meeting[];
  public errorMessage: any;

  constructor(private _meetingService: MeetingService) { }

  ngOnInit() {
    console.log('meetingListComponent.js working ok');
    this.getMeetings();
  }

  getMeetings(){
    this.loading = true;
    this._meetingService.getMeetings().subscribe(
      result => {
        this.meetings = result.meetings;
        console.log(this.meetings)
        this.loading = false;
      },err =>{
        this.errorMessage = <any>err;
        if(this.errorMessage != null){
          console.log(this.errorMessage);
        }
        this.loading = false;
      }
    );
  }

  

}
