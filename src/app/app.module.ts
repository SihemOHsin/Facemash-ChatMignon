import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VoterComponent } from './pages/voter/voter.component';
import { ScoreComponent } from './pages/score/score.component';
import { ChatService } from './services/chat.service';
import { ScoreService } from './services/score.service';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ChatService, ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
