import { Component } from '@angular/core';
import {TooltipModule} from "ng2-tooltip";
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meetings app!';
}
