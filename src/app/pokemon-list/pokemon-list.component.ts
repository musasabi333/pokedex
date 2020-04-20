import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'poke-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: Array<Pokemon> = [];
  selectedPokemon: Pokemon;

  dataLoaded = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe(
      pokemon => {
        this.pokemonList.push(pokemon);
        this.pokemonList.sort((p1, p2) => p1.id - p2.id);
      },
      error => console.error(error),
      () => {
        this.dataLoaded = true;
        console.log('Got all Pokémon!');
      }
    );
  }

  selectPokemon(index: number) {
    this.selectedPokemon = this.pokemonList[index];
    console.log(this.selectedPokemon);
  }

}
