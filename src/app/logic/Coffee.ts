import { TastingRating } from "./TastingRating";
import { PlaceLocation } from "./PlaceLocation";

export class Coffee {
  // Properites
  _id: string;
  type: string;
  rating: number;
  notes: string;
  tastingRating: TastingRating;

  constructor(
    public name: string = "",
    public place: string = "",
    public location: PlaceLocation = null
  ) {
    this.name = "";
    this.place = "";
    this.location = new PlaceLocation();
    this.tastingRating = new TastingRating();
  }
}
