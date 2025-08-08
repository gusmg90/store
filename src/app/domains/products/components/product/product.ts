import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
//img = 'https://picsum.photos/200/300?random=1';

@Input({required : true}) img: string = 'https://picsum.photos/200/300?random=1';
@Input({required : true}) price: number = 0;
@Input({required : true}) title: string = '';


@Output() addToCart = new EventEmitter();


addToCartHandler() {
    console.log('click desde el hijo');
    this.addToCart.emit('hola, este es un mensaje desde el hijo'+ this.title);
}

}
