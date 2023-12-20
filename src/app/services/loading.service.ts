import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class  LoadingService {
  private loading!: HTMLIonLoadingElement;
  constructor(public loadingController: LoadingController) { }

  // Simple loader
  // simpleLoader(Message:string) {
  //   this.loadingController.create({
  //     message: Message
  //   }).then((response) => {
  //     response.present();
  //   });
  // }
  // Dismiss loader
//  async dismissLoader() {
//   await  this.loadingController.dismiss().then((response) => {
//       console.log('Loader closed!', response);
//     }).catch((err) => {
//       console.log('Error occured : ', err);
//     });
//   }
async simpleLoader(message: string) {
  this.loading = await this.loadingController.create({
    message:message,
    // translucent: true,
    spinner: 'circles', // Choose the spinner style: 'circles', 'dots', 'lines', etc.
  });

  await this.loading.present();
}
async dismissLoader() {
  if (this.loading) {
    await this.loadingController.dismiss();
  }
}
  // Auto hide show loader
  autoLoader() {
    this.loadingController.create({
      message: 'Loader hides after 4 seconds',
      duration: 4000
    }).then((response) => {
      response.present();
      response.onDidDismiss().then((response) => {
        console.log('Loader dismissed', response);
      });
    });
  }   
  // Custom style + hide on tap loader
  customLoader() {
    this.loadingController.create({
      message: 'Loader with custom style',
      duration: 4000,
      cssClass:'loader-css-class',
      backdropDismiss:true
    }).then((res) => {
      res.present();
    });
  }   
}