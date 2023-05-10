import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector:'app-property-card',
  //template:`<h1>I am a card</h1>`, //to have html in the same file
  templateUrl:'property-card.component.html',  //to have html in a seperate file add the url of the file in here.


  //styles : ['h1 {font-weight:normal;}'] //to have css in the same file
  styleUrls:['property-card.component.css']
})
export class PropertyCardComponent{
  Property : any = {
    Id : 1,
    Name : "Birla House",
    Type : "House",
    Price : 12000

 }
}
