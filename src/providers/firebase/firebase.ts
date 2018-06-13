
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase';
import {Drink} from '../../models/drink';
import { Injectable } from '@angular/core';



/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  public drinks: Array<Drink>;

  constructor(private http: HttpClient) {

  }
  getDrinks(callback){
      firebase.database().ref('drinks').once('value').then( (snapshot) => {
        callback( snapshot.val() );
      });
  }
}
