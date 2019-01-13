import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Coffee } from '../logic/Coffee';
import { Router } from '@angular/router';
import { GeoLocationService } from '../services/geo-location.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit { 

  list : [Coffee]

  constructor(private data: DataService,
              private router: Router,
              private geolocation: GeoLocationService) { }

  goDetails(coffee:Coffee){
    this.router.navigate(["/coffee", coffee._id]);
    console.log(coffee.place);
    console.log(coffee);
  }

  goMap(coffee: Coffee){
    const mapURL = this.geolocation.getMapLink(coffee.location);
    location.href = mapURL;
  }

  share(coffee: Coffee){
    // Using web share API(old)
  
    const shareText = `I had this coffee at ${coffee.place} and for me it's a ${coffee.rating} star coffee`;
    if('share' in navigator){
      (navigator as any).share({
        title: coffee.name,
        text: shareText,
        url: window.location.href
      }).then( () => console.log("shared")).catch( () => console.log("error sharing"));
    } else {
      const shareURL = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      location.href = shareURL;
    }
  }

  ngOnInit() {
    this.data.getList(list => {
      this.list = list;
    })
  }

}
