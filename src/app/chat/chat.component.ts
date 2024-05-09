import { Component } from '@angular/core';
import { LeftPanalComponent } from '../left-panal/left-panal.component';
import { SendComponent } from '../send/send.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [LeftPanalComponent, SendComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
