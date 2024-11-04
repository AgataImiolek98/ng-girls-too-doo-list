import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  success: boolean = false;
  randomText: string = lorem.sentence();
  input: string = ''

  handleInput(event: any) {
    this.input = event.target.value;

    if (this.input === this.randomText) {
      this.success = !this.success
    }
  }

  compare(randomLetter: string, inputLetter: string) {
    if (!inputLetter) {
      return 'pending'
    }

    return inputLetter === randomLetter ? 'correct' : 'incorrect';
  }
}
