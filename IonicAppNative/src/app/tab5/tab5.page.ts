import { Component} from '@angular/core';
import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
  subscription : any;
  percentage: number;
  isPlugged: boolean;
  message: string;
  constructor(private batteryStatus: BatteryStatus, private flashlight: Flashlight) {
    // reference: https://www.positronx.io/ionic-check-battery-status-and-charging-state/
      //check the battery status
    this.subscription = this.batteryStatus.onChange().subscribe(status => {
      this.percentage = status.level;
      this.isPlugged = status.isPlugged;
      alert("Level: " + status.level + " Is plugged: " + status.isPlugged);
    });
  }

  // toggle the flashlight function
  toggleFlashlight() {
    if (this.percentage > 50){
      this.flashlight.toggle();
      this.message = "You can turn the flashlight on";
    } else {
      this.message = "The battery percentage is low, please charge the device and you can't turn the flashlight on now.";
    }
  }

   }



 

  