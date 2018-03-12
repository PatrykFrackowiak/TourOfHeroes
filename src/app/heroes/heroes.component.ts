import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero;

  constructor() { }

  ngOnInit() {
    this.hero = {
      id: 1,
      name: 'Magenta'
    };
  }

}
