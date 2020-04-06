import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular';

  typeNum = 456;

  typeBool = true;

itemselect:any={}

	ItemArray=[
    {
      name:"singe",
      description:"48 cm",
      image:'/assets/singe.jpg'
    }
    ,
    {
      name:"mouette",
      description:"43 cm",
      image:'/assets/mouette.jpg'
    }
    ,
    {
      name:"requin",
      description:"6.4 m",
      image:'/assets/requin blanc.jpg'
    }

  ]

  Clique(item){


  	this.itemselect.name = item.name
  	this.itemselect.description = item.description

  } 

  ;

};
