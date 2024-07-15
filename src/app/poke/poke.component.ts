import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeDetailComponent } from '../poke-detail/poke-detail.component'; 
import { PokeDetails } from '../poke-details';

@Component({
  selector: 'app-poke',
  standalone: true,
  imports: [CommonModule, PokeDetailComponent],
  template: `
    <section>
      <form class="search-form">
        <input type="text" placeholder="Filter by name" />
        <button class="primary" type="button ">Search</button>
      </form>
    </section>
    <section class="results">
      <app-poke-detail 
      *ngFor = "let pokeDetail of pokeDetailList" 
      [pokeDetails]="pokeDetail"
      ></app-poke-detail>
    </section>
  `,
  styleUrl: './poke.component.css',
})
export class PokeComponent {
  pokeDetailList: PokeDetails[] = [
    {
      id: 1,
      name: 'Bulbizarre',
      types: ['Plante', 'Poison'],
      stats: {
        PV: 45,
        Attaque: 49,
        Defense: 49,
        'Attaque Spéciale': 65,
        'Défense Spéciale': 65,
        Vitesse: 45,
        'Somme des statistiques de base': 318,
        'Moyenne des statistiques de base': 53.0,
      },
    },
    {
      id: 2,
      name: 'Herbizarre',
      types: ['Plante', 'Poison'],
      stats: {
        PV: 60,
        Attaque: 62,
        Defense: 63,
        'Attaque Spéciale': 80,
        'Défense Spéciale': 80,
        Vitesse: 60,
        'Somme des statistiques de base': 405,
        'Moyenne des statistiques de base': 67.5,
      },
    },
    {
      id: 3,
      name: 'Florizarre',
      types: ['Plante', 'Poison'],
      stats: {
        PV: 80,
        Attaque: 82,
        Defense: 83,
        'Attaque Spéciale': 100,
        'Défense Spéciale': 100,
        Vitesse: 80,
        'Somme des statistiques de base': 525,
        'Moyenne des statistiques de base': 87.5,
      },
    },
    {
      id: 4,
      name: 'Salamèche',
      types: ['Feu'],
      stats: {
        PV: 39,
        Attaque: 52,
        Defense: 43,
        'Attaque Spéciale': 60,
        'Défense Spéciale': 50,
        Vitesse: 65,
        'Somme des statistiques de base': 309,
        'Moyenne des statistiques de base': 51.5,
      },
    },
    {
      id: 5,
      name: 'Reptincel',
      types: ['Feu'],
      stats: {
        PV: 58,
        Attaque: 64,
        Defense: 58,
        'Attaque Spéciale': 80,
        'Défense Spéciale': 65,
        Vitesse: 80,
        'Somme des statistiques de base': 405,
        'Moyenne des statistiques de base': 67.5,
      },
    },
    {
      id: 6,
      name: 'Dracaufeu',
      types: ['Feu', 'Vol'],
      stats: {
        PV: 78,
        Attaque: 84,
        Defense: 78,
        'Attaque Spéciale': 109,
        'Défense Spéciale': 85,
        Vitesse: 100,
        'Somme des statistiques de base': 534,
        'Moyenne des statistiques de base': 89.0,
      },
    },
  ];
}
