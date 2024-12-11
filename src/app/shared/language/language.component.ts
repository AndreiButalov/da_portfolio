import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private isEnglish: boolean = true;

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
  }

  getLanguage(): boolean {
    return this.isEnglish;
  }
}