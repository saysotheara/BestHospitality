import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Survey6Page } from "../survey6/survey6";

@IonicPage()
@Component({
  selector: 'page-survey5',
  templateUrl: 'survey5.html',
})
export class Survey5Page {
  click: boolean;
  selectedLogo: string;
  selectedOrganization: string;
  question5_kh: string[];
  answer_text: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.question5_kh = [
      "១) ការស្វាគមន៍ និងភាពរួសរាយរាក់ទាក់របស់មន្ត្រី",
      "២) ការយកចិត្តទុកដាក់ និងភាពរហ័សរហួន",
      "៣) ការរៀបចំខ្លួនរបស់មន្ដ្រី (ឯកសណ្ឋានត្រឹមត្រូវ)",
      "៤) ឆ្លើយតបករណីមានបញ្ហា",
      "៥) មន្ដ្រីមានជំនាញច្បាស់លាស់"
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
    console.log('ionViewDidLoad Survey5Page');
    console.log("answer4: ");
    
  }

  nextPage(answer5) {
    this.navCtrl.push(Survey6Page, {
      ans5: answer5
    });
  }

  mcqAnswer(question, answer) {
    console.log("q5-" + question + "-" + answer);
  }

}
