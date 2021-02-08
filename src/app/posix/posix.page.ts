import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-posix',
  templateUrl: 'posix.page.html',
  styleUrls: ['posix.page.scss'],
})
export class PosixPage {

  address: string;


  latitude: number;
  longitude: number;
  accuracy: number;


  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(
      private geolocation: Geolocation,
      private nativeGeocoder: NativeGeocoder,
      private modalCtrl: ModalController
  ) {
  }


  // gps device
  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.accuracy = resp.coords.accuracy;

      this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);

    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
    });
  }

  // cerca argomenti
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
        .then((result: NativeGeocoderResult[]) => {
          this.address = this.generateAddress(result[0]);
        })
        .catch((error: any) => {
          alert('Error getting location' + JSON.stringify(error));
        });
  }

  // creiamo un indirizzo
  generateAddress(addressObj) {
    const obj = [];
    let address = '';
    // tslint:disable-next-line:forin
    for (const key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (const val in obj) {
      if (obj[val].length) {
        address += obj[val] + ', ';
      }
    }
    return address.slice(0, -2);
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
