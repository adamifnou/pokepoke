export interface PokeDetails {
  id: number;
  name: string;
  types: Array<string>;
  stats: {
    PV: number;
    Attaque: number;
    Defense: number;
    'Attaque Spéciale': number;
    'Défense Spéciale': number;
    Vitesse: number;
    'Somme des statistiques de base': number;
    'Moyenne des statistiques de base': number;
  };
}
