import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-conversation-history',
  standalone: true,
  imports: [JsonPipe, DatePipe],
  templateUrl: './conversation-history.component.html',
  styleUrl: './conversation-history.component.scss'
})
export class ConversationHistoryComponent {
  data:any=[]
  constructor( private communicationService:CommunicationService) {
    this.communicationService.sharedData$.subscribe(resp => {
      this.data.push(resp)
})
  }
  deleteItem(index:any) {
    console.log(index)
   this.data.splice(index, 1)
  }
}
