import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';

  constructor() {
    //NO ASYNC
    //before render
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  
    ngOnChanges(changes: SimpleChanges) {
      //antes y durante el evento
        console.log('nfgOnChanges:');
         console.log('nfgOnChanges:');
        console.log('-'.repeat(10));
        console.log(changes);

    }

ngOnInit()
{
  //after
  console.log('onInit');
  console.log('-'.repeat(10));
}

}
