import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
// import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES;
  heroes: Hero[];
  // heroes: Observable<Hero[]>;  // Observable варіант з *ngFor="let hero of heroes | async" у heroes.component.html
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();  // варіант з *ngFor="let hero of heroes | async" у heroes.component.html
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


}
