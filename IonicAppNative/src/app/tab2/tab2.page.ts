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
  public speeds : number [];
  public selectedSpeed: number;

  // lastEmittedValue: RangeValue;

  // onIonChange(ev: Event) {
  //   this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
  // }

  constructor(private tts: TextToSpeechAdvanced) {

    this.speeds = [ 0.5, 0.75, 1 ];
    this.selectedSpeed = 1; // default speed
  }

  // source https://www.bennadel.com/blog/3955-having-fun-with-the-speechsynthesis-api-in-angular-11-0-5.htm

  // implementation of the text to speech api through the cordova plugin TextToSpeechAdvanced 
  // speak to listen the entered input text by the user with the selected speed
  public speak() : void {

		
    this.tts.speak(this.text);

	}

  // stop function to stop the text to speech api
  public stop() : void {
    this.tts.stop();
  }

  // perform the text to speech api with the selected speed


	private synthesizeSpeechFromText(
		speeds: number,
		text: string
		) : void {

		var utterance = new SpeechSynthesisUtterance( text );
		utterance.rate = speeds;

		speechSynthesis.speak( utterance );

	}

  

}
