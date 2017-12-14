import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SurveyPage } from '../survey/survey'

@IonicPage()
@Component({
  selector: 'page-choose-lang',
  templateUrl: 'choose-lang.html',
})
export class ChooseLangPage {
  click: boolean;
  selectedLogo: string;
  selectedOrganization: string;

  // var to store language name and icon
  lang_name: string[];
  lang_icon: string[];
  language: Array<{
    name: string,
    icon: string,
  }>
  // var to store answer for choose
  answer_text: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.click = false;
    this.lang_name = ['kh', 'en', 'fr', 'cn', 'ja'];
    this.lang_icon = [
      '../../assets/imgs/kh.png', '../../assets/imgs/en.png', '../../assets/imgs/fr.png', '../../assets/imgs/cn.png', '../../assets/imgs/ja.png',];
    this.answer_text = [
      "ល្អបំផុត",
      "ល្អ",
      "ធម្មតា",
      "អន់"
    ];

    //get selected Organization from navParams and set to storage
    this.selectedOrganization = navParams.get("organization");
    this.storage.set('selectedOrganization', this.selectedOrganization);
    this.storage.set('answer_text', JSON.stringify(this.answer_text));

    // push language and icon
    this.language = [];
    for (let i = 0; i < 5; i++) {
      this.language.push({
        name: this.lang_name[i],
        icon: this.lang_icon[i]
      });
    }

    // get selected logo from storage
    this.storage.get("selectedLogo").then(val => {
      this.selectedLogo = val;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseLangPage');
    console.log(this.selectedOrganization);
  }

  nextPage(selectedLang) {
    this.navCtrl.push(SurveyPage, {
      selectedLang: selectedLang
    });
  }

}
