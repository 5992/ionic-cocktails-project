import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseProvider } from '../../providers/firebase/firebase'
import {Drink} from '../../models/drink';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  drinks: Array <Drink> = [];
  constructor(public navCtrl: NavController,
    private firebase: FirebaseProvider) {

      this.firebase.getDrinks((drinks) => {
        if(drinks){
          this.renderDrinks(drinks);
        }

      });


      // this._firebase.drink1.on('value', data =>{
      //   if (data.val() != null) {
      //     this.name = data.val();
      //   }
      //   console.log(this.name);
     //});
    }

    renderDrinks(drinks){
    //count the number of objects using the keys
    var count = Object.keys(drinks).length;
    //get the keys of objects and store in keys array
    var keys = Object.keys(drinks);
    this.drinks = [];
    for(let i:number =0; i< count; i++){
      this.drinks.push( drinks[ keys[i] ]);
    }
  }
}
