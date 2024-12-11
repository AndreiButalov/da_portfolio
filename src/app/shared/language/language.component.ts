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
  private localStorageKey = 'selectedLanguage';
  private isEnglish: boolean;

  constructor() {
    const storedLanguage = localStorage.getItem(this.localStorageKey);
    this.isEnglish = storedLanguage ? JSON.parse(storedLanguage) : true;
  }

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.isEnglish));
  }

  getLanguage(): boolean {
    return this.isEnglish;
  }
}