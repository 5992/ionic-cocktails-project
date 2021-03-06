import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Drink} from '../../models/drink';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  drink: Drink;
  title: string;
  detail: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private view: ViewController
            ) {

    //constructor
    this.title = navParams.data.title;
    this.detail = navParams.data.detail;
    console.log(navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    // this.drink = this.navParams.get('drink');
    // console.log(drink.name);
  }
  closeModal(){
    let data = {test: 'hello'};
    this.view.dismiss(data);
  }
}
