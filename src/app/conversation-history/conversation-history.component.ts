import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-conversation-history',
  standalone: true,
  imports: [JsonPipe, DatePipe],
  templateUrl: './conversation-history.component.html',
  styleUrl: './conversation-history.component.scss'
})
export class ConversationHistoryComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  data: any = []
  constructor(private communicationService: CommunicationService) {
    console.log("hello")
    this.communicationService.sharedData$.subscribe(resp => {
      this.data.push(resp)
    })
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  deleteItem(index: any) {
    console.log(index)
    this.data.splice(index, 1)
  }
}
