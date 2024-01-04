import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { EverhomepageComponent } from './everhomepage/everhomepage.component';
import { CommonImpModule } from 'src/app/common.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    CommonImpModule
  ],
  declarations: [Tab1Page,
    EverhomepageComponent,
  ]
})
export class Tab1PageModule {}
