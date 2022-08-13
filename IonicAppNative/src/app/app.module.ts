import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// adding the components to the app module
// source https://ionicframework.com/docs/native/
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { DeviceOrientation } from '@awesome-cordova-plugins/device-orientation/ngx';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Device,TextToSpeechAdvanced,NativeAudio,DeviceOrientation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
