import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class  LoadingService {
  isLoading = false;
  constructor(public loadingController: LoadingController) { }

 
async simpleLoader(message: string) {
  this.isLoading = true;
   await this.loadingController.create({
    message:message,
    // translucent: true,
    spinner: 'circles', // Choose the spinner style: 'circles', 'dots', 'lines', etc.
  }).then(a => {
    a.present().then(() => {
      console.log('presented');
      if (!this.isLoading) {
        a.dismiss().then(() => console.log('abort presenting'));
      }
    });
  });

}
async dismissLoader() {
  this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  
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
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
    });
    return await loading.present();
  }
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
}