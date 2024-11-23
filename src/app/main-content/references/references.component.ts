import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent
],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  references = [
    {
      image: '/assets/img/format_quote.png',
      name: 'Andrei',
      status: 'Team Partner',
      description: "Andrei really kept the togenther with his great organisation and clear communication. We wouldn't have got this far without his commitment."
    },
    {
      image: '/assets/img/format_quote.png',
      name: 'Andrei2',
      status: 'Team Partner',
      description: "Andrei really kept the togenther with his great organisation and clear communication. We wouldn't have got this far without his commitment."
    },
    {
      image: '/assets/img/format_quote.png',
      name: 'Andrei3',
      status: 'Team Partner',
      description: "Andrei really kept the togenther with his great organisation and clear communication. We wouldn't have got this far without his commitment. Andrei really kept the togenther with his great organisation and clear "
    },
  ]

}
