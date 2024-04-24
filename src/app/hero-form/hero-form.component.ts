import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {

  states = ['Tamil Nadu', 'Kerala', 'Karnataka', 'AP']; 
  
  hero = new Hero("", "", "");

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.hero = new Hero('', '', '');
  }

}
