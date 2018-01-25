import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
    console.log("meting-new.component.ts working");
    this.meeting = new Meeting("","");
  }

  onSubmit(form){
    console.log("-------enviando formulario-------");
    console.log(this.meeting);
    this.change.emit(true);
    this._meetingService.addMeeting(this.meeting)
      .subscribe(
        response => {
          if(response.meeting){
            console.log("Album ingresado");
            console.log(response.meeting);
            //ha cambiado
            this.change.emit(true);
            this.meeting = new Meeting("","");
            form.reset();
          }
        }, error=>{
          this.errorMessage = <any>error;
          if(this.errorMessage != null){
            console.log(this.errorMessage);
          }
        }
      );
  }

}
