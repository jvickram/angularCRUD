import { Injectable } from '@angular/core';
import { Coffee } from '../logic/Coffee';
import { PlaceLocation } from '../logic/PlaceLocation';
import { HttpClient } from '@angular/common/http';
import { callbackify } from 'util';

 


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // public endpoint = "http://localhost:3000/";
  public endpoint = "http://192.168.2.8:8888/";

  get(coffeeId: string, callback){
    this.http.get(`${this.endpoint}coffees/${coffeeId}`)
    .subscribe(response => {
           callback(response); // No need to write response.json(), updated version converts the data to json automatically
    })
  }

  getList(callback) {
  // Dummy Service 
    // const list = [
    //   new Coffee("Double Espressp","Sunny cafe", new PlaceLocation("123 Market st", "San Francisco")),
    //   new Coffee("Caramel Americano", "Starcoffee", new PlaceLocation("Gran via 34", "Madrid"))

    // ];
    // callback(list)

    //Real web services
    this.http.get(`${this.endpoint}\coffees`)
    .subscribe(response => {
      console.log(response);
      callback(response);
    })
    }
  
  save(coffee, callback) {

    // TODO: Change it with real Web service
    if(coffee._id){
      //It's an update
      this.http.put(`${this.endpoint}coffees/${coffee._id}`,coffee)
      .subscribe(response => {
        callback(true);
      });
    }else{
      //It's an insert
      this.http.post(`${this.endpoint}coffees`,coffee)
      .subscribe(response => {
        callback(true);
      });
    }
  }
}
