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
      name: 'Team Partner 1',
      status: 'Team Partner',
      description: "Andrei really kept the togenther with his great organisation and clear communication. We wouldn't have got this far without his commitment."
    },
    {
      image: '/assets/img/format_quote.png',
      name: 'Team Partner 2',
      status: 'Team Partner',
      description: "Andrei was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a singnificant contribution tu us achieving our goals."
    },
    {
      image: '/assets/img/format_quote.png',
      name: 'Team Partner 3',
      status: 'Team Partner',
      description: "It was a great pleasure to work with Andrei. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm."
    },
  ]

}
