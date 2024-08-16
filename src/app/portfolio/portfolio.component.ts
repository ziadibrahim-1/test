import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  
  
 flag : boolean =true
 modelImg:string =''
 src1:string='../../assets/img/poert1.png'
 src2:string='../../assets/img/port2.png'
 src3:string='../../assets/img/port3.png'

 hideImg(element:EventTarget |null , img:HTMLImageElement):void{
  if(element == img) return;
  this.flag=true;
 }
}
