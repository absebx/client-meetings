import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {MeetingService} from '../../../services/meeting.service';
import {TicketService} from '../../../services/ticket.service';
import {Meeting} from '../../../models/meeting';
import {Ticket} from '../../../models/ticket';

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.component.html',
  styleUrls: ['./meeting-detail.component.css'],
  providers: [MeetingService, TicketService]
})
export class MeetingDetailComponent implements OnInit {
  public meeting: Meeting;
  public tickets: Ticket[];
  public newTicket: Ticket;
  public errorMessage: any;
  public loading: boolean;
  public meetingId: string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _meetingService: MeetingService,
    private _ticketService: TicketService
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params)=>{
      this.meetingId = params['id'];
      this.meeting = new Meeting("","");
      this.newTicket = new Ticket("",false,"");
      this.getMeeting();
    });
  }

  getMeeting(){
    this.loading = true;
    console.log("get meeting: "+this.meetingId);
    this._meetingService.getMeeting(this.meetingId).subscribe(
      result => {
        this.meeting = result.meeting;
        if(!this.meeting){
          this._router.navigate(['/']);
        }else{
          console.log(this.meeting);
          this.getTickets();
        }
        this.loading = false;
      }, err => {
        this.errorMessage = <any>err;
        if(this.errorMessage != null){
          this._router.navigate(['/']);
        }
      }
    );
  }

  getTickets(){
    this.loading = true;
    console.log("get tickets of meeting");
    this._ticketService.getTickets(this.meetingId).subscribe(
      result => {
        this.tickets = result.tickets;
        if(!this.tickets){
          this._router.navigate(['/']);
        }else{
          console.log("Tickets of the meeting");
          console.log(this.tickets);
        }
      }, err => {
        console.log("error in petition");
        this._router.navigate(['/']);
      }
    );
  }

  onSubmit(form){
    console.log("submit");
    this.newTicket.meeting = this.meetingId;
    console.log(this.newTicket);
    this._ticketService.addTicket(this.newTicket).subscribe(
      result => {
        if(!result.ticket){
          console.log("Error in petition");
        }else{
          this.newTicket.name = "";
          form.reset();
          this.getTickets();
        }
      }, err => {
        this.errorMessage = <any>err;
        console.log("Error in petition");
      }
    );
  }

}
