import { Component, OnInit } from '@angular/core';
import{heroe,HeroesService}from '../../servicios/heroes.service'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Array<heroe> = []
  

  constructor(private servicioHeroes : HeroesService) {
    this.heroes = this.servicioHeroes.getHeroe();
    console.log(this.heroes)
   }
   ngOnInit(): void {
  }
}
