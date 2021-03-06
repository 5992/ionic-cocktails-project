import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';

import { FirebaseProvider } from '../../providers/firebase/firebase'
import {Drink} from '../../models/drink';
import { DetailsPage } from '../../pages/details/details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  selectedDrink: any;

  icons: string[];

  items: Array<{title: string, note: string, icon: string}>;
  drinks: Array <Drink> = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private firebase: FirebaseProvider,
    public modalCtrl:ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

    //modal section
    this.selectedDrink = navParams.get('drink');

    //getDrinks
    this.firebase.getDrinks((drinks) => {
      if(drinks){
        this.renderDrinks(drinks);
      }
    });
  }

  renderDrinks(drinks){ //everytime
    //count the number of objects using the keys
    var count = Object.keys(drinks).length;
    //get the keys of objects and store in keys array
    var keys = Object.keys(drinks);
    this.drinks = [];
    for(let i:number =0; i< count; i++){
      this.drinks.push( drinks[ keys[i] ]);
    }
  }

  // itemTapped(event, item) {
  //   // That's right, we're pushing to ourselves!
  //   this.navCtrl.push(ListPage, {
  //     item: item
  //   });
  // }

  launchModalListPage(drink){
    this.navCtrl.push(DetailsPage, drink); //{
    //   drink: drink
    // });
    let modal = this.modalCtrl.create(DetailsPage); //need to create new blank page call detailsdrink
    modal.present();
  }
}
