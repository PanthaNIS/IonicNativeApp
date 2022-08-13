import { Component, OnInit } from '@angular/core';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@awesome-cordova-plugins/device-orientation/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  private area:any;
  private direction:string;

  constructor(private deviceOrientation: DeviceOrientation) { 
    // Get the device current compass heading
    this.deviceOrientation.getCurrentHeading().then(
      (data: DeviceOrientationCompassHeading) => {
        this.area = data.magneticHeading;
      }
    );

    // Watch the device compass heading change
    var subscription = this.deviceOrientation.watchHeading().subscribe(
      (data: DeviceOrientationCompassHeading) => {
        this.area = data.magneticHeading;

      // reference: https://subscription.packtpub.com/book/application-development/9781783287949/2/ch02lvl1sec21/creating-a-visual-compass-to-show-the-device-direction
        
        if (this.area > 0 && this.area <= 22.5) {
          this.direction = 'N';
        }
        else if (this.area > 22.5 && this.area <= 67.5) {
          this.direction = 'NE';
        }
        else if (this.area >67.5 && this.area <= 112.5) {   
          this.direction = 'E';
        }
        else if (this.area > 112.5 && this.area <= 157.5) {
          this.direction = 'SE';
        }
        else if (this.area > 157.5 && this.area <= 202.5) {
          this.direction = 'S';
        }
        else if (this.area > 202.5 && this.area <= 247.5) {
          this.direction = 'SW';
        }
        else if (this.area > 247.5 && this.area <= 292.5) {
          this.direction = 'W';
        }
        else if (this.area > 292.5 && this.area <= 337.5) {
          this.direction = 'NW';
        }
        else if (this.area > 337.5 && this.area <= 360) {
          this.direction = 'N';
        }
      }
    );
  }
  ngOnInit() {
  }

        

}
