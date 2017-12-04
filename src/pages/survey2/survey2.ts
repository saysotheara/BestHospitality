import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { Http } from '@angular/http';

import { Survey3Page } from '../survey3/survey3';

@IonicPage()
@Component({
  selector: 'page-survey2',
  templateUrl: 'survey2.html',
})
export class Survey2Page {
  click: boolean;
  selectedLogo: string;
  selectedOrganization: string;
  selectedLang: string;

  question2_title: string;
  question2: string[];
  answer_choice: Array<{
    text: string,
    emoji: string
  }>;
  answer_text: string[];
  answer_emoji: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public https: Http) {

    this.click = false;
    this.question2 = [];

    this.selectedLang = navParams.get('lang');

    storage.get("answer_text").then((val) => {
      this.answer_text = JSON.parse(val);
    });
    storage.get("answer_emoji").then((val) => {
      this.answer_emoji = JSON.parse(val);
    });

     // get selected params
    storage.get("selectedLogo").then((val) => {
      this.selectedLogo = val;
    });
    storage.get("selectedOrganization").then((val) => {
      this.selectedOrganization = val;
    });
    
    this.checkSelectedLang();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Survey2Page');
  }

  nextPage() {
    this.navCtrl.push(Survey3Page);
  }

  mcqAnswer(question, answer) {
    console.log("q2-" + question + "-" + answer); 
  }

  checkSelectedLang() {
    if (this.selectedLang == 'kh') {
      this.https.get('http://localhost/ionic_api/group/2').map(res => res.json()).subscribe(data => {
        this.question2_title = data.results.group_title_kh;
      })

      this.https.get('http://localhost/ionic_api/question/2').map(res => res.json()).subscribe(data => {
        var result = data.results;
        result.forEach(element => {
          this.question2.push(element.question_kh);
        })
        console.log(result);
      })
    } else if (this.selectedLang == 'en') {
      this.https.get('http://localhost/ionic_api/group/2').map(res => res.json()).subscribe(data => {
        this.question2_title = data.results.group_title_en;
      });

      this.https.get('http://localhost/ionic_api/question/2').map(res => res.json()).subscribe(data => {
        var result = data.results;
        result.forEach(element => {
          this.question2.push(element.question_en);
        });
        console.log(result);
      });
    }
  }

}
