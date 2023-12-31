import { Component, OnInit } from '@angular/core';
import {  ViewChild, ElementRef  } from '@angular/core';


import jsPDF from 'jspdf';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import html2canvas from 'html2canvas'; 
import jspdf from 'jspdf';



@Component({
  selector: 'app-viewsummary',
  templateUrl: './viewsummary.component.html',
  styleUrls: ['./viewsummary.component.scss'],
})
export class ViewsummaryComponent  implements OnInit {


  constructor() { }

  ngOnInit() {}
  @ViewChild('pdfTable') pdfTable!: ElementRef;


  public downloadAsPDF() {
    var data = (document.getElementById('pdfTable') ) as HTMLElement;  //Id of the table
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }

}
