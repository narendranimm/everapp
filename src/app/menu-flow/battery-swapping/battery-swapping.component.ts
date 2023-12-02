import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battery-swapping',
  templateUrl: './battery-swapping.component.html',
  styleUrls: ['./battery-swapping.component.scss'],
})
export class BatterySwappingComponent  implements OnInit {
  slider:any=[];
  constructor() {
    
   }

  ngOnInit() {
    this.slider=[
      {image:'https://s3-alpha-sig.figma.com/img/b892/249f/333c6d12c7d0d7fcbd4fe5705036c0e8?Expires=1699228800&Signature=o4iVa3fOaHT0JpwEivmsalR0-On2qQ4phnLjn~G-tB9UOk0pJN3l8L-zV~zV3nx9f5yrYvxG8wIQIbsBee5h2GCexau4WuLMMIzsDMIbjcXiQDkngPEkIUfXfX64v0DCwJbJFk4jCylOm0AW90JTAnzUHzxsWj0kU0wyWkianXwnrj831nxy4Qi8qT8Wb3CslSjSiVqLZjqnCNmXk4XPtaXozngFN4qhsp8aZtCUSBkhTBrZBvp5zNjRDGmE~2D-kv2MdPBLbLRHlYp0g2DqWhM4vbCi-Sm6SkkvVqlM79BeGwKF3yQhzDZGti4vZ4s9FGzEJwXWpbSXepOIUcsTdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',content:'Ameerpet metro EV battery station'},
      {image:'https://s3-alpha-sig.figma.com/img/6038/682c/26a58b8a4c8588427528c399a9ce59db?Expires=1699228800&Signature=TlMsdx6lYPRimJafR0kNoeA1trm4V5Jr6m1Fokhm8fj32vf1M5q2kYXSuSxtuU~sVLWbaqMQFdo-hjvY26UaFa0rYQr4VyDFewPgL~66BhBVflSbdYMq-e9psnIZPFh7o8qeI-LsnGzrnyap-WKBzk4jMmZ9BUX2bB4Sqjm-aCG28qPKCSgPONwl0TQqAONtoJwNUUg9THaeBKVo3WbPxUyJCZ7o2UBEYPJ3dcImkdM6TVsfS-KC2fKuNKtaTkjI0LAe5f7iBuMRFZVw79Nqaldolc-dXd9brZ9QkCjoRkhA0hSfIW3f2N-BbPNi4W3ryKWrAtAR0I-nXOwa9moTFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',content:'Tolichowki EV battery station'},
      {image:'https://s3-alpha-sig.figma.com/img/935b/90f6/f1d93441303585483a22db590b56161d?Expires=1699228800&Signature=Ns-d4~EeVr9zliv1SVZ6vqoT3sEptjuDN~q2iPebDSzp2-bipJ0h-2jIy8yO5Wv~lRF8ZRa6IYvJTBwDnTPxW6UCWsgO-FxNTOkMRIYLvb-bRNsh6k~qbxkFNcoLm8gbSM7jEhJFMYILah20DH1frfikdMUi9aQnl-ccJIbHJz61pQ~66nQrQO1T8wuYJMW-NtzLLTV1P-TSWhjtINd2~Sdxk2S-ArIWvSBe~xQU0n4RkOQNB7voJouSMzIliU4m48nzZ4k1ejJbv-1zEUwIggIqcnfscE~U-mfjs5nnHsDM4Rb07P52kleE5TFez5293-uVbTQfg9EeFM9~t92W~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',content:'Kondapur EV battery station'},
      {image:'https://s3-alpha-sig.figma.com/img/935b/90f6/f1d93441303585483a22db590b56161d?Expires=1699228800&Signature=Ns-d4~EeVr9zliv1SVZ6vqoT3sEptjuDN~q2iPebDSzp2-bipJ0h-2jIy8yO5Wv~lRF8ZRa6IYvJTBwDnTPxW6UCWsgO-FxNTOkMRIYLvb-bRNsh6k~qbxkFNcoLm8gbSM7jEhJFMYILah20DH1frfikdMUi9aQnl-ccJIbHJz61pQ~66nQrQO1T8wuYJMW-NtzLLTV1P-TSWhjtINd2~Sdxk2S-ArIWvSBe~xQU0n4RkOQNB7voJouSMzIliU4m48nzZ4k1ejJbv-1zEUwIggIqcnfscE~U-mfjs5nnHsDM4Rb07P52kleE5TFez5293-uVbTQfg9EeFM9~t92W~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',content:'Kavuri hills EV battery station'},
    ]
  }

}
