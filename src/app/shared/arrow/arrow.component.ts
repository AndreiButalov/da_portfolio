import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule
  ],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.scss'
})
export class ArrowComponent {
  @Input() arrowSectionReverse: boolean = false;
  @Input() link: string = '#';
}
