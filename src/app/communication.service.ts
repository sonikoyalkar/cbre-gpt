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

  private sharedPinSubject = new BehaviorSubject<any>({});
  sharedPinData$ = this.sharedPinSubject.asObservable();

  constructor() { }
  //send data to conversation histroy//
  sendData(data: any) {
    this.sharedDataSubject.next({ label: data, timeStamp: Date.now() });
  }
  //send data to message//
  sendMessageData(data: any) {
    console.log(data)
    this.sharedMessageSubject.next(data);
  }

  //send data to pin//
  sendPinData(data: any) {
    console.log(data)
    this.sharedPinSubject.next(data);
  }


  getMessage(msg: any) {

    return of({ question: msg, answer: "ROX Hi-Tech Limited Announces IPO Plans to Fuel Expansion and Technological Innovation", image: "../../assets/rox.png", source: "Hiring", url: "https://www.flipkart.com/" })
  }
}
