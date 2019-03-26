import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  // criando uma propriedade
  // Declarar o tipo do dado do restaurante
  //  Importar o decorator input e marcar nosso o restaurante com o decorator input 
  //  ...permitindo que outros components possam passar o restaurante para o componente restaurant
  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
