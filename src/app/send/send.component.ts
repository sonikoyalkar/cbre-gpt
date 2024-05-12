import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-send',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './send.component.html',
  styleUrl: './send.component.scss'
})
export class SendComponent {
  chatMessage: any
  constructor( private communicationService:CommunicationService) {
  }

  sendMessage(msg: any) {
    this.communicationService.sendData(msg)
    this.communicationService.getMessage(msg).subscribe(resp => {
      console.log(resp)
      this.communicationService.sendMessageData(resp)
    })
  }
}
