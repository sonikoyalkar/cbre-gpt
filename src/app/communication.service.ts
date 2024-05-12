import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
   private sharedDataSubject = new BehaviorSubject<any>({});
  sharedData$ = this.sharedDataSubject.asObservable();

  private sharedMessageSubject = new BehaviorSubject<any>({});
  sharedMessageData$ = this.sharedMessageSubject.asObservable();

  constructor() { }
  //send data to conversation histroy//
  sendData(data: any) {
    this.sharedDataSubject.next({ label: data, timeStamp:Date.now()});
  }
//send data to message//
  sendMessageData(data: any) { 
     console.log(data)
    this.sharedMessageSubject.next(data);
  }

  getMessage(msg: any) {
    
    return of({ question: msg, answer:"angular is the js framework", image:"", source:"abcd", url:""})
  }
}
