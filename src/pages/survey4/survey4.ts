import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Survey5Page } from "../survey5/survey5";

@IonicPage()
@Component({
  selector: 'page-survey4',
  templateUrl: 'survey4.html',
})
export class Survey4Page {
  click: boolean;
  selectedLogo: string;
  selectedOrganization: string;
  question4_kh: string[];
  answer_text: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.question4_kh = [
      "១) ការស្វាគមន៍ និងភាពរួសរាយរាក់ទាក់របស់បុគ្គលិក",
      "២) ការយកចិត្តទុកដាក់ និងភាពរហ័សរហួន",
      "៣) ការរៀបចំខ្លួនរបស់បុគ្គលិក (ឯកសណ្ឋានត្រឹមត្រូវ)",
      "៤) ភាពរហ័សក្នុងការត្រួតពិនិត្យឥវ៉ាន់/មនុស្ស",
      "៥) មន្ដ្រីមានជំនាញវិជ្ជាជីវៈច្បាស់លាស់ក្នុងពេលបំពេញការងារ",
      "៦) ភាពស្មុគស្មាញក្នុងការត្រួតពិនិត្យឥវ៉ាន់",
      "៧) ឆ្លើយតបករណីមានបញ្ហា"
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
    console.log('ionViewDidLoad Survey4Page');
    console.log("answer3: ");
  }

  nextPage(answer4) {
    this.navCtrl.push(Survey5Page, {
      ans4: answer4
    });
  }

  mcqAnswer(question, answer) {
    console.log("q4-" + question + "-" + answer);
  }

}
