import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-thank',
  templateUrl: 'thank.html',
})
export class ThankPage {
  click: boolean;
  selectedLogo: string;
  selectedOrganization: string;
  question5_kh: string[];
  answer_text: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

    this.click = true;
    storage.get('selectedLogo').then((val) => {
      this.selectedLogo = val;
    });
    storage.get('selectedOrganization').then((val) => {
      this.selectedOrganization = val;
    });
    storage.get('answer_text').then((val) => {
      this.answer_text = JSON.parse(val);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankPage');
  }

  homePage() {
    this.navCtrl.setRoot(HomePage);
  }

}
