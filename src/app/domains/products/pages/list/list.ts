import { Component } from '@angular/core';
import  { Product } from './../../components/product/product';

@Component({
  selector: 'app-list',
  imports: [Product],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
fromChild(event: string){
console.log('click desde el padre');
console.log(event);

}
  
}
