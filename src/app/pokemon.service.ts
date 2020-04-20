import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Observable, range } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { PokemonSpecies } from './pokemon-species';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<Pokemon> {
    return range(1, 150).pipe(
      flatMap((id) => this.http.get<Pokemon>(`http://pokeapi.co/api/v2/pokemon/${id}`)),
      map(pokemon => {
        this.http.get<PokemonSpecies>(`http://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`).subscribe(
          species => {
            pokemon.flavorText = species.flavor_text_entries.find(f => f.language.name === 'en').flavor_text;
            pokemon.name = species.names.find(f => f.language.name === 'en').name;
          }
        );

        return pokemon;
      })
    );
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`http://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
