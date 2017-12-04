import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ThankPage } from "../thank/thank";

@IonicPage()
@Component({
  selector: 'page-survey6',
  templateUrl: 'survey6.html',
})
export class Survey6Page {
  selectedLogo: string;
  selectedOrganization: string;
  question6_kh: string[];
  ans1: string[];
  ans2: string[];
  ans3: string[];
  ans4: string[];
  ans5: string[];
  ans6: string[];
  ans7: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    storage.get('selectedLogo').then((val) => {
      this.selectedLogo = val;
    })
    storage.get('selectedOrganization').then((val) => {
      this.selectedOrganization = val;
    })
    this.question6_kh = [
      "១) ភេទ",
      "២) អាយុ",
      "៣) ប្រទេស",
      "៤) ខេត្ត​/ក្រុង",
      "៥) កំរិតសិក្សា",
      "៦) មុខរបរ",
      "៧) មតិរបស់អ្នក"
    ];
    this.ans1 = [
      "ប្រុស",
      "ស្រី"
    ];
    this.ans2 = [
      "១៨-២៥",
      "២៥-៣៥",
      "៣៦-៥០",
      "៥៩-៦៥",
      "៦៥+"
    ];
    this.ans3 = [
      "កម្ពុជា",
      "វៀតណាម",
      "ថៃ",
      "ឡាវ",
      "មីយ៉ាន់ម៉ា",
      "ម៉ាឡេសុី",
      "ឥណ្ឌូនេស៊ី",
      "សឹង្ហបុរី",
      "ហ្វីលីពីន",
      "ប្រុយណេ",
      "អង់គ្លេស",
      "បារាំង",
      "ចិន",
      "ជប៉ុន",
      "កូរ៉េ",
      "ផ្សេងៗ"
    ];
    this.ans4 = [

    ];
    this.ans5 = [
      "បឋមសិក្សា",
      "វិទ្យាល័យ",
      "ថ្នាក់ឧត្តមសិក្សា",
      "ថ្នាក់ក្រោយឧត្តមសិក្សា",
      "វិទ្យាស្ថាន សាលាបណ្តុះបណ្តាលវិជ្ជាជីវៈ",
      "ផ្សេងៗ"
    ];
    this.ans6 = [
      "សិស្ស និស្សិត",
      "មន្ត្រីស្ថាប័នរដ្ឋ",
      "បុគ្គលិកឯកជន",
      "បុគ្គលិកអង្គការក្រៅរដ្ឋាភិបាល",
      "មានអាជីវកម្មផ្ទាល់ខ្លួន",
      "ផ្សេងៗ"
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Survey6Page');
  }

  nextPage(answer5) {
    this.navCtrl.push(ThankPage, {
      ans5: answer5
    });
  }

}
