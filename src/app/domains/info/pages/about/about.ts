import { Component } from '@angular/core';
import { Counter } from '../../../shared/components/counter/counter';
import { signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
duration = signal(100);
message = signal('hola');
changeDuration(event: Event) {
  const input = event.target as HTMLInputElement;
  this.duration.set(Number(input.valueAsNumber));
}

changeMessage(event: Event) {
  const input = event.target as HTMLInputElement;
  this.message.set(input.value);
}



}
