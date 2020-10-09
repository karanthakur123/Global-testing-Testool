import { Component } from '@angular/core';
import {Router} from '@angular/router';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'meanapp';





  fileName= 'ExcelSheet.xlsx';
  
  
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
  constructor(
    private route :Router
    ) { 
    this.loadScripts(); 
  } 
 
  
  // Method to dynamically load JavaScript 
  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
      'assets/js/bootstrap.bundle.min.js',
      'assets/js/chart-area-demo.js',
      'assets/js/chart-pie-demo.js',
      'assets/js/Chart.min.js',
      'assets/js/jquery.easing.min.js',
      'assets/js/jquery.min.js',
     
      'assets/js/sb-admin-2.min.js'
    
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
    const node = document.createElement('script'); 
    node.src = dynamicScripts[i]; 
    node.type = 'text/javascript'; 
    node.async = false; 
    document.getElementsByTagName('head')[0].appendChild(node); 
    } 
  } 
 
  } 
  
