import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PinComponent } from '../pin/pin.component';
import { ConversationHistoryComponent } from '../conversation-history/conversation-history.component';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-left-panal',
  standalone: true,
  imports: [ HeaderComponent, PinComponent, ConversationHistoryComponent],
  templateUrl: './left-panal.component.html',
  styleUrl: './left-panal.component.scss'
})
export class LeftPanalComponent {

}
