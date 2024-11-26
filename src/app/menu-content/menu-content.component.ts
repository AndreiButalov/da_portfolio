import { Component } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-menu-content',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './menu-content.component.html',
  styleUrl: './menu-content.component.scss'
})
export class MenuContentComponent {

}
