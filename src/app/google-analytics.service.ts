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
   /*
   gtag('event', 'enviar', { 
      'event_category': 'busqueda_barrera', 'event_label': 'inicio', 'value': 'haciendopruebas'});
    */

    // Configure a target
gtag('config', 'GA_MEASUREMENT_ID_1');
gtag('config', 'GA_MEASUREMENT_ID_2', { 'groups': 'agency' });
gtag('config', 'GA_MEASUREMENT_ID_3', { 'groups': 'agency' });

// Route this sign_in event to Analytics IDs in the 'agency' group:
gtag('event', 'sign_in', { 'send_to': 'agency' });
    }
}
