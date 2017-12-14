import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchOrgPage } from '../search-org/search-org';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
  
export class HomePage {
  logos: string[];

  constructor(public navCtrl: NavController) {
    // get logos from assets
    this.logos = ["../../assets/imgs/cbh_logo_private.png", "../../assets/imgs/cbh_logo_public_border.png", "../../assets/imgs/cbh_logo_public.png"];
  }

  // go to second page with param logo
  secondPage(selectedLogo) {
    this.navCtrl.push(SearchOrgPage, {
      logo: selectedLogo
    })
  }

}
