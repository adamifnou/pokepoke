import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeDetails } from '../poke-details';
@Component({
  selector: 'app-poke-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="poke-details">
      <h2>Name: {{ pokeDetails?.name }}</h2>
      <p>Type: {{ pokeDetails?.types  }}</p>
      <p>Stats:</p>
      <ul>
        <li>HP: {{ pokeDetails?.stats?.PV }}</li>
        <li>Attack: {{ pokeDetails?.stats?.Attaque }}</li>
        <li>Defense: {{ pokeDetails?.stats?.Defense }}</li>
        <li>Special Attack: {{ pokeDetails?.stats?.['Attaque Spéciale']}}</li>
        <li>Special Defense: {{ pokeDetails?.stats?.['Défense Spéciale']}}</li>
        <li>Speed: {{ pokeDetails?.stats?.Vitesse }}</li>
        <li>Total: {{ pokeDetails?.stats?.['Somme des statistiques de base']}}</li>
        <li>Average: {{ pokeDetails?.stats?.['Moyenne des statistiques de base']}}</li>
      </ul>
    </section>
  `,
  styleUrl: './poke-detail.component.css',
})
export class PokeDetailComponent {
  @Input() pokeDetails!: PokeDetails;
}
