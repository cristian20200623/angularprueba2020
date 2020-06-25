import { Injectable } from '@angular/core';

declare let gtag:Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  public eventEmitter( 
    eventName: string, 
    eventCategory: string, 
    eventAction: string, 
    eventLabel: string = null,  
    eventValue: number = null ){ 
      /*
         gtag('event', eventName, { 
                 eventCategory: eventCategory, 
                 eventLabel: eventLabel, 
                 eventAction: eventAction, 
                 eventValue: eventValue
               })
               */

    /*
     gtag('event', eventName, {
      'event_category': eventCategory,
      'event_label': eventLabel,
      'value': eventValue
    });
    */
   gtag('event', 'enviar', { 
      'event_category': 'suscripcion', 'event_label': 'inicio', 'value': 'haciendopruebas'});

    }
}
