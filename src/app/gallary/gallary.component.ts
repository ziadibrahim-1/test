import { Component } from '@angular/core';
import { RecommendedComponent } from '../recommended/recommended.component';

@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [RecommendedComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {

}
