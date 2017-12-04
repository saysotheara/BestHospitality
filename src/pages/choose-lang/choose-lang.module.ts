import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseLangPage } from './choose-lang';

@NgModule({
  declarations: [
    ChooseLangPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseLangPage),
  ],
})
export class ChooseLangPageModule {}
