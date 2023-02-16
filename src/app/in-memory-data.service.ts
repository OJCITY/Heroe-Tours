import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{

  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Fabian' },
      { id: 13, name: 'Thomas Santana' },
      { id: 14, name: 'Magistrata' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'Tiana Jones' },
      { id: 17, name: 'Sebastian' },
      { id: 18, name: 'Dr. Christian' },
      { id: 19, name: 'Magdalena' },
      { id: 20, name: 'Ellen Johnson' }
    ];
    return {heroes}
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
