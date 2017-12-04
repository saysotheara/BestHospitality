import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

import { Survey2Page } from '../survey2/survey2';
// import { ArgumentType } from '@angular/core/src/view';

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {
  selectedLogo: string;
  selectedOrganization: string;
  selectedLang: string;
  click: boolean;

  question1_title: string;
  question1: string[];
  answer_text: string[];
  answer_text_en: string[];
  answer_emoji: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public https: Http) {
  
    this.selectedLang = navParams.get('lang');
    this.click = false;
    this.question1 = [];

    this.answer_emoji = [
      "../../assets/imgs/cbh/4.png", "../../assets/imgs/cbh/3.png",
      "../../assets/imgs/cbh/2.png", "../../assets/imgs/cbh/1.png"];
    this.answer_text = ["ល្អបំផុត"​, "ល្អ", "ធម្មតា", "អន់"];

    this.storage.set("answer_emoji", JSON.stringify(this.answer_emoji));
    this.storage.set("answer_text", JSON.stringify(this.answer_text));
    this.storage.set("selectedLang", this.selectedLang.toString());

    this.checkSelectedLang();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyPage');
    console.log("selected language: " + this.selectedLang); 
  }

  nextPage() {
    this.navCtrl.push(Survey2Page, { 
      lang: this.selectedLang
    });
  }

  mcqAnswer(question, answer) {
    console.log("q1-" + question + "-" + answer);
  }

  checkSelectedLang() {
    if (this.selectedLang == 'kh') {
      this.https.get('http://localhost/ionic_api/group/1').map(res => res.json()).subscribe(data => {
        this.question1_title = data.results.group_title_kh;
      })

      this.https.get('http://localhost/ionic_api/question/1').map(res => res.json()).subscribe(data => {
        var result = data.results;
        result.forEach(element => {
          this.question1.push(element.question_kh);
        });
        console.log(result);
      })
    } else if (this.selectedLang == 'en') {
      this.https.get('http://localhost/ionic_api/group/1').map(res => res.json()).subscribe(data => {
        this.question1_title = data.results.group_title_en;
      })

      this.https.get('http://localhost/ionic_api/question/1').map(res => res.json()).subscribe(data => {
        var result = data.results;
        result.forEach(element => {
          this.question1.push(element.question_en);
        });
        console.log(result);
      })
    }
  }

}
