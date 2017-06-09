import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public items: any;


  constructor() {
    this.items = [];

    for(let i = 0; i < 2000; i++){

      let item = {
        title: 'Title',
        body: 'body',
        avatarUrl: 'https://avatars.io/facebook/random'+i
      };

      this.items.push(item);
    }
  }

}
