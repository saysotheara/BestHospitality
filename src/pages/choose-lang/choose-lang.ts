import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

import { SurveyPage } from '../survey/survey'
// import { DIRECTION_FORWARD } from 'ionic-angular/navigation/nav-util';

@IonicPage()
@Component({
  selector: 'page-choose-lang',
  templateUrl: 'choose-lang.html',
})
export class ChooseLangPage {
  selectedLogo: any;
  selectedOrganization: any;
  click: boolean;
  lang_name: string[];
  lang_icon: string[];
  language: Array<{
    name: string,
    icon: string,
  }>

  question1_title: string;
  question1: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public https: Http) {

    this.selectedOrganization = navParams.get("organization");

    this.question1 = [];
    this.language = [];

    this.click = false;
    this.lang_name = ['kh', 'en', 'fr', 'cn', 'ja'];
    this.lang_icon = ['../../assets/imgs/cbh/kh.png', '../../assets/imgs/cbh/en.png', '../../assets/imgs/cbh/fr.png', '../../assets/imgs/cbh/cn.png', '../../assets/imgs/cbh/ja.png',];

    for (let i = 0; i < 5; i++) {
      this.language.push({
        name: this.lang_name[i],
        icon: this.lang_icon[i]
      });
    }

    this.storage.set("selectedOrganization", this.selectedOrganization);

    this.storage.get("selectedLogo").then(val => {
      this.selectedLogo = val;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseLangPage');
    console.log(this.selectedOrganization);
  }

  itemTapped(selectedLang) {
    this.navCtrl.push(SurveyPage, {
      lang: selectedLang
    });
  }

}
