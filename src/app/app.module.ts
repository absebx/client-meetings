import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { routing, appRoutingProviders} from './app.routing';

import {TooltipModule} from "ng2-tooltip";
import { MeetingListComponent } from './components/meetings/meeting-list/meeting-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MeetingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TooltipModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
