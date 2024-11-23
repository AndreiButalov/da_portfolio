import { Component } from '@angular/core';
import { ContactMeComponent } from '../../main-content/contact-me/contact-me.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ContactMeComponent,
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  email = 'andrei.butalov@gmx.de';
}
