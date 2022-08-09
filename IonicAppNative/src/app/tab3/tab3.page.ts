import { Component } from '@angular/core';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  pinFormatter(value: number=100) {
    return `${value}%`;
  }

  volume:number=100;

  constructor(private nativeAudio: NativeAudio) {
    this.nativeAudio.setVolumeForComplexAsset('audio', this.volume);
    this.nativeAudio.preloadSimple('audio1', 'assets/music/audio.mp3');
  }


  // Play the audio with the selected volume

  public play() : void {
   
    this.nativeAudio.play('audio');

  }
  // Stop the audio
  public stop() : void {
    this.nativeAudio.stop('audio');
  }
  


}
