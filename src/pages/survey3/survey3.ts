import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

import { Survey4Page } from '../survey4/survey4';

@IonicPage()
@Component({
  selector: 'page-survey3',
  templateUrl: 'survey3.html',
})
export class Survey3Page {
  click: boolean;
  selectedLogo: string;
  selectedOrganization: string;

  question3_title: string;
  question3_en: string[];
  question3_kh: string[];
  answer_text: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public https: Http) {

    this.question3_en = [
      "1) Welcoming and friendly staff",
      "2) Attention and promptness",
      "3) Staff’s Appearance (appropriate uniform)",
      "4) Swiftness of checking procedure"
    ];

    this.question3_kh = [
      "១) ការស្វាគមន៍ និងភាពរួសរាយរាក់ទាក់របស់បុគ្គលិក",
      "២) ការយកចិត្តទុកដាក់ និងភាពរហ័សរហួន",
      "៣) ការរៀបចំខ្លួនរបស់បុគ្គលិក (ឯកសណ្ឋានត្រឹមត្រូវ)",
      "៤) ភាពរហ័សក្នុងការត្រួតពិនិត្យឥវ៉ាន់"
    ];

    this.click = false;
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
    console.log('ionViewDidLoad Survey3Page');
  }

  nextPage(answer3) {
    this.navCtrl.push(Survey4Page);
  }

  mcqAnswer(question, answer) {
    console.log("q3-" + question + "-" + answer);
  }

}
