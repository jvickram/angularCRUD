import { Injectable } from '@angular/core';
import { PlaceLocation } from '../logic/PlaceLocation';

@Injectable({
  providedIn: 'root'
})
// export class GeoLocationService {

//   constructor() { }

//   requestLocation (callback){
//   	// W3C Geolocation API
//   	navigator.geolocation.getCurrentPosition(
//   	position => {
//   	callback (position.coords);
//   	},
//   	error =>{
//   	callback(null);
//   	}
//   	)
//   }

//   getMapLink(location: PlaceLocation) {

//   	//Getting the location from native apps(for Mobiles) or browser(for desktops)
  	
//   	let query = "";
//   	if(location.latitude){
//   	query = location.latitude + "," + location.longitude;
//   	}else {
//   		query = `${location.address}, ${location.city}`;
//   	}

//   	//Check for Apple Devices
//   	if(/iPad|iPhone|iPod/.test(navigator.userAgent)){
//   		return 'https://maps.apple.com/?q=${query}';
//   	} else {
//   			return 'https://maps.google.com/?q=${query}';
//   	}

//   	// Universal Link
//   	// <a href="https://maps/google.com/?q=Eiffel+Tower">
//   	// <a href="https://maps/google.com/?q=34.44,56.44">
//   	// <a href="https://maps/apple.com/?q=34.44,56.44">


//   }

// }

// import { Injectable } from '@angular/core';
// import { PlaceLocation } from "./logic/PlaceLocation";

@Injectable()
export class GeoLocationService {

  constructor() { }

  requestLocation(callback) {
    // W3C Geolocation API
    navigator.geolocation.getCurrentPosition(
      position => {
        callback(position.coords);
      },
      error => {
        callback(null);
      }
    )
  }

  getMapLink(location : PlaceLocation) {
    let query = "";
    if (location.latitude) {
      query = location.latitude + "," + location.longitude;
    } else {
      query = `${location.address}, ${location.city}`;
    }
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      return `https://maps.apple.com/?q=${query}`;
    } else {
      return `https://maps.google.com/?q=${query}`;      
    }
    // Universal Link
    // <a href="https://maps.google.com/?q=Eiffel+Tower">
    // <a href="https://maps.apple.com/?q=34.44,56.44">
  }

}
