import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public text : string;
  public speed : number [];

  lastEmittedValue: RangeValue;

  onIonChange(ev: Event) {
    this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
  }
  constructor(private tts: TextToSpeechAdvanced) {

    this.speed = [ 0.5, 0.75, 1 ];
  }

  // source https://www.bennadel.com/blog/3955-having-fun-with-the-speechsynthesis-api-in-angular-11-0-5.htm
  
  public speak() : void {

		
    this.tts.speak(this.text);

	}

  public stop() : void {
    this.tts.stop();
  }

  

}
