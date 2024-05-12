import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  messages:any=[]
  constructor(private communicationService:CommunicationService) {
    this.communicationService.sharedMessageData$.subscribe((resp:any)=> {
      console.log(resp)
      this.messages.push(resp)
  })
}
}
